// Core
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Tools
import { IDataService } from '../interfaces';
import { MongoGenericRepository } from './mongo-generic-repository';

// Schemas
import { Post, PostDocument, Category, CategoryDocument } from './schemas';

@Injectable()
export class MongoDataServices implements IDataService, OnApplicationBootstrap {
  posts: MongoGenericRepository<Post>;
  categories: MongoGenericRepository<Category>;

  constructor(
    @InjectModel(Post.name)
    private PostRepository: Model<PostDocument>,
    @InjectModel(Category.name)
    private CategoriesRepository: Model<CategoryDocument>,
  ) {}

  onApplicationBootstrap(): void {
    this.posts = new MongoGenericRepository<any>(this.PostRepository);
    this.categories = new MongoGenericRepository<any>(
      this.CategoriesRepository,
    );
  }
}
