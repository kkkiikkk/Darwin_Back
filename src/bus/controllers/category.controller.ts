// Core
import { Controller, Get, Param, Put, Body, Post } from '@nestjs/common';

// Tools
import { UpdateCategoryDto, CreateCategoryDto } from '../../interfaces';
import { CategoryService } from '../services/category/category.service';

@Controller('api')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/categories')
  async getAll() {
    return this.categoryService.getAllCategory();
  }

  @Get('/categories/:id')
  async getById(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Post('/category')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Put('/categories/:id')
  async updateCategory(
    @Param('id') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(categoryId, updateCategoryDto);
  }
}
