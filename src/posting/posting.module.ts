import { Module } from '@nestjs/common';
import { PostingController } from './posting.controller';
import { PostingService } from './posting.service';
import { Posting } from '../entities/posting.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { randomQuestion } from '../entities/randomQuestion.entity'

@Module({
    controllers: [PostingController],
    providers: [PostingService],
    imports: [TypeOrmModule.forFeature([Posting, randomQuestion])],
    exports: [PostingService]
})
export class PostingModule {}
