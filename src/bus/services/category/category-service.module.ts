// Core
import { Module } from '@nestjs/common';

// Tools
import { DataServiceModule } from '../data.service.module';
import { CategoryService } from './category.service';

@Module({
  imports: [DataServiceModule],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryServiceModule {}
