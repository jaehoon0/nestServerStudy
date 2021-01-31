import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RandQuestionService } from './randQuestion.service';
import { randomQuestion } from '../entities/randomQuestion.entity'
import { get } from 'http';

@Controller('randQuestion')
export class RandQuestionController {
    constructor(private readonly appService: RandQuestionService) {}

    @Post()
    async createNewQuestion(@Body() newQuestion:randomQuestion) {
        await this.appService.createNewQuestion(newQuestion)
    }

    @Get('/Questions')
    async showAllQuestion() {
        return await this.appService.showAllQuestion()
    }

    @Get('/Questions/Question')
    async showOneQuestion() {
        return await this.appService.showOneQuestion()
    }
}
