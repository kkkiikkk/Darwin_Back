import { Model } from 'mongoose';
import { IGenericRepository } from '../interfaces';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().exec();
  }

  getOne(id: any): Promise<T> {
    return this._repository.findById(id).exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item);
  }
}
