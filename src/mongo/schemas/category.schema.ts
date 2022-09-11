// Core
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Document & Category;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Category {
  @Prop({ unique: true, required: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
