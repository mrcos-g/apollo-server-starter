import { Resolver, Query } from 'type-graphql';
import { Book } from '../../../entities/Book';

@Resolver()
export class BooksResolver {
  @Query((_) => [Book], { description: 'return full list of books' })
  public async books(): Promise<Book[]> {
    const books = await Book.find();
    return books;
  }
}
