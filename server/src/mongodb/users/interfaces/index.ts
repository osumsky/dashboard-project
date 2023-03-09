import { Property } from 'src/mongodb/properties/schema';

export interface ICreateUser {
  name: string;
  email: string;
  avatar: string;
  allProperties: Property[];
}

export interface IUpdateUser {
  name: string;
  email: string;
  avatar: string;
  allProperties: Property[];
}
