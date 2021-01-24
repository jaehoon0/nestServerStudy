import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Potato } from './entities/potatoes';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Potato)
    private usersRepository: Repository<Potato>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  append(information: Potato) {
    this.usersRepository.insert(information);
  }
}
