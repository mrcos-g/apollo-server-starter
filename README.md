# Apollo Server Starter

Apollo Server Starter aims to help you get your server up and running faster.

### Tech

Apollo Server Starter uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [TypeScript] - Typed superset of JavaScript
- [Apollo Server] - GraphQL Server
- [TypeGraphQL] - Framework developed to help you build your GraphQL API with TypeScript.
- [TypeORM] - ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms
- [webpack] - Static module bundler for modern JavaScript applications

### Installation

Apollo Server Starter uses [Node.js](https://nodejs.org/) v12.18.1 to run.

We recommend using [NVM](https://github.com/nvm-sh/nvm#installation-and-update) to manage node.js versions

Install Yarn

```sh
$ brew install yarn
```

Install the dependencies and devDependencies.

```sh
$ yarn install
```

### Development

Run in development mode

```sh
yarn start:dev
```

Run ESLint and Prettier on all TypeScript files under src/

```sh
yarn lint
```

### Production

Build for production to the build/ folder

```sh
yarn build
```

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen."
[node.js]: http://nodejs.org
[typescript]: https://www.typescriptlang.org/
[apollo server]: https://www.apollographql.com/docs/apollo-server/
[typegraphql]: https://typegraphql.com/
[typeorm]: https://typeorm.io/#/
[webpack]: https://webpack.js.org/
