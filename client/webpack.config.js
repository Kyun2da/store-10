import path from 'path';
import dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import webpack from 'webpack';

const __dirname = path.resolve();

export default (env) => {
  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(tsx|jsx|js|ts)$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: ['/node_modules/'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|ico)$/i,
          use: {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 8192,
              name: 'assets/[name]?[hash].[ext]',
            },
          },
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      publicPath: '/',
      hot: true,
      proxy: {
        '/api/': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({ async: false }),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
      new dotenv({
        path: env.production ? '../.env.prod' : '../.env.dev',
      }),
    ],
    resolve: {
      modules: ['node_modules'],
      extensions: ['.tsx', '.jsx', '.ts', '.js', '.json', '.css'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    output: {
      publicPath: '/',
      path: path.join(__dirname, './dist'),
      filename: '[name].js',
    },
    devtool: env.production ? 'hidden-source-map' : 'inline-source-map',
  };
};
