import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoistService } from './mongoist.service';

@Module({
  imports: [ConfigModule],
  providers: [MongoistService],
  exports: [MongoistService]
})
export class MongoistModule {}
