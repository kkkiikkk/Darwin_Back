// Entities
import { Post, Category } from '../entities';

// Tools
import { IGenericRepository } from './';

export abstract class IDataService {
  abstract posts: IGenericRepository<Post>;

  abstract categories: IGenericRepository<Category>;
}
