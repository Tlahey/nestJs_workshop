import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('Cat')
export class Cat {

  @ObjectIdColumn()
  private id!: string;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  age: number;

  @Column()
  isAlive: boolean;

}