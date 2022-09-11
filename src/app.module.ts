// Core
import { Module } from '@nestjs/common';

// Modules
import { MongoModule } from './mongo/mongo.module';
import { DataServiceModule } from './bus/services/data.service.module'
import { CategoryServiceModule } from './bus/services/category/category-service.module'

// Controllers
import { CategoryController } from './bus/controllers/category.controller'

@Module({
  imports: [
    MongoModule,
    DataServiceModule,
    CategoryServiceModule
  ],
  controllers: [
    CategoryController
  ]
})
export class AppModule {}
