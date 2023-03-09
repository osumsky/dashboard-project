import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/schema';
import { Model } from 'mongoose';
import { ICreateUser, IUpdateUser } from './interfaces';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async create(user: ICreateUser): Promise<User> {
    
    const userExists = await this.userModel.findOne({ email: user.email });
    
    if (userExists) return userExists;
        
    return this.userModel.create(user);
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, user: IUpdateUser): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }


}
