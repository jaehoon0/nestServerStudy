import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class randomQuestion {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('longtext')
  questionContent: string;

  @Column('longtext')
  answer: string;
}