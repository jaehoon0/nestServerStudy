import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { identity } from 'rxjs';
import { AppService } from './app.service';
import { Potato } from './entities/potatoes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/findAll')
  findAll() {
    return this.appService.findAll();
  }

  @Post('/insert')
  insert(@Body() information: Potato) {
    this.appService.append(information);
  }
}
