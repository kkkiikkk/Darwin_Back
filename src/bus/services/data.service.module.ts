// Core
import { Module } from '@nestjs/common';

// Tools
import { MongoModule } from '../../mongo/mongo.module';

@Module({
  exports: [MongoModule],
  imports: [MongoModule],
})
export class DataServiceModule {}
