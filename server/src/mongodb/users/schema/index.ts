import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Property } from 'src/mongodb/properties/schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  avatar: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Property' })
  allProperties: mongoose.Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
