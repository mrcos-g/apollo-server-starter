import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';

// TypeGraphQL Defs that will be moved
import { ObjectType, Field, Resolver, Query, buildSchema } from 'type-graphql';

@ObjectType()
class Book {
  @Field()
  title!: string;

  @Field()
  author!: string;
}

@Resolver()
class BooksResolver {
  private bookCollection: Book[] = bookList;

  @Query(() => [Book])
  async books() {
    return await this.bookCollection;
  }
}
// End TypegraphQL Portion

const bookList = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const startServer = async () => {
  const port = (process.env.PORT || 4000) as number;

  const schema = await buildSchema({ resolvers: [BooksResolver] });

  const server = new ApolloServer({ schema, playground: true });
  server.listen(port).then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
};

startServer();
