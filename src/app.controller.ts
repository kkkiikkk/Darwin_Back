import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const newCategory = await this.appService.create('game')
    const newPost = await this.appService.createPost(newCategory.name)
    return { newCategory, newPost };
  }
}
