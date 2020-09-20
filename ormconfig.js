var sharedConnectionOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'gql_starter',
  synchronize: false,
  uuidExtension: 'pgcrypto',
  type: 'postgres',
};

module.exports = [
  {
    ...sharedConnectionOptions,
    cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
    },
    entities: ['src/entities/**/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
  },
  {
    ...sharedConnectionOptions,
    entities: ['build/bundle.js'],
    migrations: ['build/migrations/**/*.js'],
    name: 'build',
  },
];
