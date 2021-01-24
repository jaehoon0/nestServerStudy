import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Potato } from './entities/potatoes'
import "reflect-metadata";

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Potato])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
