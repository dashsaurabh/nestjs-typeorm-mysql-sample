import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LibraryController } from "./controllers/library.controller";

import { Book } from "./entities/book.entity";
import { LibraryService } from "./services/library.service";

@Module({
    imports:[TypeOrmModule.forFeature([Book])],
    providers:[LibraryService],
    controllers:[LibraryController]
})
export class LibraryModule{}