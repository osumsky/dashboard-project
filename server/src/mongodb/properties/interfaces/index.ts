import mongoose from 'mongoose';
import { User } from 'src/mongodb/users/schema';

export interface ICreateProperty {
  title: string;
  description: string;
  propertyType: string;
  location: string;
  price: number;
  photo: string;
  creator: User;
  email: string;
  _id: mongoose.Types.ObjectId;
}

export interface IUpdateProperty {}
