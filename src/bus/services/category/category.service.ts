// Core
import { Injectable } from '@nestjs/common';

// Tools
import {
  IDataService,
  Category,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../../interfaces';

@Injectable()
export class CategoryService {
  constructor(private dataService: IDataService) {}

  getAllCategory(): Promise<Category[]> {
    return this.dataService.categories.getAll();
  }

  getCategoryById(id: string): Promise<Category> {
    return this.dataService.categories.getOne(id);
  }

  createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new Category();
    category.name = createCategoryDto.name;

    return this.dataService.categories.create(category);
  }

  updateCategory(categoryId: string, updateCategoryDto: UpdateCategoryDto) {
    const category = new Category();
    category.name = updateCategoryDto.name;

    return this.dataService.categories.update(categoryId, category);
  }
}
