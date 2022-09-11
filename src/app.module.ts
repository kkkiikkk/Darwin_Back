// Core
import { Module } from '@nestjs/common';

// Modules
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [MongoModule],
})
export class AppModule {}
