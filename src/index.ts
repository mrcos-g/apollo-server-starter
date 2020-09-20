if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { createConnection, getConnectionOptions } from 'typeorm';

import entities from './entities';
import { resolvers } from './schema';

const startServer = async () => {
  const port = (process.env.PORT || 4000) as number;

  const connectionOptions = await getConnectionOptions('build');
  const schema = await buildSchema({ resolvers });

  await createConnection({
    ...connectionOptions,
    entities,
    name: 'default',
  });

  const server = new ApolloServer({ schema, playground: true });
  server.listen(port).then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
};

startServer();
