import { Body, Controller, Get, Ip, Param, Patch, Post, Query } from '@nestjs/common';
import { PostingService } from './posting.service';
import { Posting } from '../entities/posting.entity';
import { randomQuestion } from '../entities/randomQuestion.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('posting')
export class PostingController {
    constructor(
        private readonly appService: PostingService, 

        @InjectRepository(randomQuestion)
        private usersRepository: Repository<randomQuestion>) {}

    @Post()
    async reportNewContent(@Body() content: {randQuestion, userPosting}, @Ip() userip: string): Promise<string> {
        const answer = await(await (this.usersRepository.findOne({id: content.randQuestion.id}))).answer;
        if(answer === content.randQuestion.answer) {
            this.appService.reportNewContent(content.userPosting, userip);
            return "등록됨ㅇㅇ";
        }
        else
            return "틀렸다 멍청아";
            
    }

    @Get()
    viewPostingInStatus(@Query('status') status: string) {
        return this.appService.viewPostingInStatus(status);
    }

    @Patch('/:id')
    changePostingStatus(@Param('id') id: string, @Query('status') status: string) {
        return this.appService.changePostingStatus(id, status);
    }
}
