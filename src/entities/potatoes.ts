import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Potato {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  grade: string;

  @Column()
  price: string;

  @Column()
  name: string;

  @Column({ default: true })
  isSold: boolean;

}