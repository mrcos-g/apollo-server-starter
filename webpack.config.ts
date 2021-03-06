import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { sync } from 'glob';
import { basename, resolve } from 'path';
// eslint-disable-next-line no-unused-vars
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: Configuration = {
  devtool: 'inline-source-map',
  entry: sync(resolve('src/migrations/*.ts')).reduce(
    (entries, filename) => {
      const migrationName = 'migrations/' + basename(filename, '.ts');
      return Object.assign({}, entries, {
        [migrationName]: filename,
      });
    },
    { bundle: './src/index.ts' },
  ),
  externals: [nodeExternals()],
  mode: (process.env.NODE_ENV as Configuration['mode']) || 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: ['ts-loader', 'eslint-loader'],
      },
    ],
  },
  optimization: { minimize: false },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'build'),
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    // NOTE: Order matters here. When duplicate filenames exist, the first matching extension imports.
    extensions: ['.mjs', '.js', '.ts'],
  },
  target: 'node',
};

export default config;
