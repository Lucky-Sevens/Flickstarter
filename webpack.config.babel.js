import webpack from 'webpack';
import path from 'path';
const cssLoader = require('css-loader');
const styleLoader = require('style-loader');


const config = {
  entry: './client/src/index',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: ['node_modules'],
        use: [
          { loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      },
      {test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {test: /\.(eot|woff|woff2|svg|ttf|png)$/,
        use: 'file-loader',
        exclude: ['node_modules']
      }
    ]
  }
};

export default config;
