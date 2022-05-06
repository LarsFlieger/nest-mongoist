import { Injectable } from '@nestjs/common';
import { MongoistService } from 'src/mongoist/mongoist.service';
@Injectable()
export class TodoService {

  constructor(private readonly mongoistService: MongoistService) {}

  findAll() {
    return this.mongoistService.getMongoDbClient().books.find();
  }
}
