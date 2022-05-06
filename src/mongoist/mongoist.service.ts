import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const mongoist = require('mongoist')

@Injectable()
export class MongoistService {
    private readonly mongoDbClient

    constructor(private configService: ConfigService) {
        const MONGO_URL = this.configService.get<string>('MONGO_URL', 'mongodb://localhost:27017');
        const MONGO_DB = this.configService.get<string>('MONGO_DB', 'opx-atoss-facade');
        
        this.mongoDbClient = mongoist(`${MONGO_URL}/${MONGO_DB}`)
    }

    getMongoDbClient() {
        return this.mongoDbClient
    }
}
