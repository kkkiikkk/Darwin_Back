// Core
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
