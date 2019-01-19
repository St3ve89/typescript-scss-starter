const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: ['./src/index.ts', './src/style.scss'],
  devtool: "inline-source-map",
  watchOptions: {
    ignored: './node_modules/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?url=false',
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "style.css"
    })
  ]
}