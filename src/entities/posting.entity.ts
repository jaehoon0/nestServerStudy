import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export const status = ["reported", "applied", "denied"]

@Entity()
export class Posting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('longtext')
  content: string;

  @Column({type: "int", width: 6})
  randomCode: number;

  @CreateDateColumn()
  date: string;

  @Column()
  ip: string;

  @Column({default: 'reported'})
  status: string;
}