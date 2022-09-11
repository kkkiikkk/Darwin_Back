// Core
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Schemas
import { Post, PostSchema, Category, CategorySchema } from './schemas';

// Tools
import { IDataService } from '../interfaces';
import { MongoDataServices } from './mongo-data-service.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mongoApp'),
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [
    {
      provide: IDataService,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataService],
})
export class MongoModule {}
