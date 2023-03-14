import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User, UserDocument } from '../users/schema';
import { ICreateProperty, IUpdateProperty } from './interfaces';
import { Property, PropertyDocument } from './schema';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async getAll(): Promise<Property[]> {
    return this.propertyModel.find().exec();
  }

  async getById(id: string): Promise<Property> {
    return this.propertyModel.findById(id);
  }

  async create(property: ICreateProperty): Promise<Property> {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    
    // Start a new session
    const session = await this.connection.startSession();
    session.startTransaction();

    const user = await this.userModel.findOne({ email: property.email });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const photoUrl = await cloudinary.uploader.upload(property.photo);

    const newProperty = new this.propertyModel({
      ...property,
      photo: photoUrl.url,
      creator: user._id,
    });

    user.allProperties.push(newProperty._id);
    await user.save({ session });

    await newProperty.save({ session });

    await session.commitTransaction();

    return newProperty;
  }

  async remove(id: string): Promise<Property> {
    return this.propertyModel.findByIdAndRemove(id);
  }

  async update(id: string, property: IUpdateProperty): Promise<Property> {
    return this.propertyModel.findByIdAndUpdate(id, property, { new: true });
  }
}
