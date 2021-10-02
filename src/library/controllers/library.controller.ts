import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { Book } from "../entities/book.entity";
import { LibraryService } from "../services/library.service";

@Controller('books')
export class LibraryController {
    constructor(private readonly libraryService: LibraryService){}

    @Post()
    async createBook(@Res() response, @Body()book: Book) {
        const newBook = await this.libraryService.createBook(book);
        return response.status(HttpStatus.CREATED).json({
            newBook
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const books = await this.libraryService.findAll();
        return response.status(HttpStatus.OK).json({
            books
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const book = await this.libraryService.findOne(id);
        return response.status(HttpStatus.OK).json({
            book
        })
    }

}