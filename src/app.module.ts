import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './library/entities/book.entity';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'library',
      entities: [Book],
      synchronize: true,
      dropSchema: true
    }), LibraryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
