import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongoistModule } from 'src/mongoist/mongoist.module';

@Module({
  imports: [
    MongoistModule
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
