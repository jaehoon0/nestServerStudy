import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posting, status } from '../entities/posting.entity';

@Injectable()
export class PostingService {
    constructor(
        @InjectRepository(Posting)
        private usersRepository: Repository<Posting>,
      ) {}
    
    async reportNewContent(content: Posting, userIP: string): Promise<void> {
        content.ip = userIP;
        content.randomCode = Math.floor(Math.random() * 1000000);
        console.log(content)
        await this.usersRepository.insert(content);        
    }

    async viewPostingInStatus(wantedStatus: string): Promise<Posting[]> {
        if(status.includes(wantedStatus)) {
            return (await this.usersRepository.find()).filter((value) => value.status === wantedStatus)        
        }
        else {
            throw new Error('There is no option which you type')
        }        
    }

    async changePostingStatus(id: string, wantedStatus: string) {
        console.log(wantedStatus)
        if(status.includes(wantedStatus)) {
            await this.usersRepository.update(id, {status: wantedStatus})
        }
        else {
            throw new Error('There is no option which you type')
        }
    }
}
