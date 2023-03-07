import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property, PropertyDocument } from './schema';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>,
  ) {}

  async getAll(): Promise<Property[]> {
    return this.propertyModel.find().exec();
  }

  async getById(id: string): Promise<Property> {
    return this.propertyModel.findById(id);
  }

  async create(properyDto: CreatePropertyDto): Promise<Property> {
    const newProperty = new this.propertyModel(properyDto);
    return newProperty.save();
  }

  async remove(id: string): Promise<Property> {
    return this.propertyModel.findByIdAndRemove(id);
  }

  async update(id: string, properyDto: UpdatePropertyDto): Promise<Property> {
    return this.propertyModel.findByIdAndUpdate(id, properyDto, { new: true });
  }
}
