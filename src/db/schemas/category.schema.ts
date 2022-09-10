// Core
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as TypeSchema } from 'mongoose'

// Schema
import { Post } from './post.schema'

export type CategoryDocument = Document & Category

@Schema({
    versionKey: false,
    timestamps: true
})
export class Category {
    @Prop({ unique: true, required: true })
    name: string

    @Prop({ ref: 'Post', type: TypeSchema.Types.ObjectId })
    posts: Post[]

}

export const CategorySchema = SchemaFactory.createForClass(Category)
