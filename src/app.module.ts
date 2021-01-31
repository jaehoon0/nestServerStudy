import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostingModule } from './posting/posting.module';
import { RandQuestionModule } from './randQuestion/randQuestion.module';
import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    PostingModule, 
    RandQuestionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
