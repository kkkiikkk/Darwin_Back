// Core
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Tools
import { Category, CategoryDocument } from './db/schemas/category.schema';
import { Post, PostDocument } from './db/schemas/post.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}

  async create(name: string) {
    const newCategory = new this.categoryModel({ name });

    return await newCategory.save();
  }

  async createPost(name: string) {
    const newPost = new this.postModel({ type: name, title: 'Naruto' });

    return await newPost.save();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
