import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const startServer = async () => {
  const port = (process.env.PORT || 4000) as number;
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen(port).then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
};

startServer();
