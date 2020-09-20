import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
@ObjectType({ description: 'book details' })
export class Book extends BaseEntity {
  // Primary generated uuid
  @PrimaryGeneratedColumn('uuid')
  @Field((_type) => ID, { description: 'Unique internal identifier' })
  public id!: string;

  @Column({ type: 'text', name: 'title', nullable: false })
  @Field({ description: 'title of book ', nullable: false })
  public title!: string;

  @Column({ type: 'text', name: 'author', nullable: false })
  @Field({ description: 'author of the book', nullable: false })
  public author!: string;
}
