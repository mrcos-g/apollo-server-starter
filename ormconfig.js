var sharedConnectionOptions = {
  host: 'localhost', // env
  port: 4000, //env
  username: 'postgres', //env
  password: 'password', //env
  database: 'demo', //env
  uuidExtension: 'pgcrypto',
  type: 'postgres',
};

module.exports = [
  {
    ...sharedConnectionOptions,
  },
];
