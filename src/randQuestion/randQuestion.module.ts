import { Module } from '@nestjs/common';
import { RandQuestionController } from './randQuestion.controller';
import { RandQuestionService } from './randQuestion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { randomQuestion } from '../entities/randomQuestion.entity'

@Module({
    controllers: [RandQuestionController],
    providers: [RandQuestionService],
    imports: [TypeOrmModule.forFeature([randomQuestion])],
    exports: [RandQuestionService]
})
export class RandQuestionModule {}
