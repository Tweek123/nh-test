const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader", 'eslint-loader']
          }
        ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
    contentBase: './src',
   }
 });