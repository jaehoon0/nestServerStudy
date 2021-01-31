import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, getRepository, Repository } from 'typeorm';
import { randomQuestion } from '../entities/randomQuestion.entity'

@Injectable()
export class RandQuestionService {
    constructor(
        @InjectRepository(randomQuestion)
        private usersRepository: Repository<randomQuestion>,
      ) {}

    async createNewQuestion(newQuestion: randomQuestion) {
        await this.usersRepository.insert(newQuestion)
    }

    async showAllQuestion() {
        return await this.usersRepository.find()
    }

    async showOneQuestion() {
        const connection = await getConnection()           
            const userIds = await connection
                .createQueryBuilder()
                .select("rQuestion.id")
                .from(randomQuestion, "rQuestion")
                .getMany()
            const randomID = userIds[Math.floor(Math.random() * userIds.length)]

        const selectedQuestion = new randomQuestion
        selectedQuestion.id = randomID.id
        selectedQuestion.questionContent = (await this.usersRepository.findOne(randomID)).questionContent
        
        return selectedQuestion
    }    
}
