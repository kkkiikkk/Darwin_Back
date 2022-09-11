// Core
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Modules
import { DbModule } from './db/db.module';
import { CategorySchema, Category } from './db/schemas/category.schema';
import { Post, PostSchema } from './db/schemas/post.schema';

@Module({
  imports: [
    DbModule,
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Post.name, schema: PostSchema },
    ]),
  ],
})
export class AppModule {}
