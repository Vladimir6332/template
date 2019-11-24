const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [`${__dirname}/src/index.js`], // webpack entry point. Module to start building dependency graph
  output: {
    path: `${__dirname}/dist`, // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
    publicPath: '', // public URL of the output directory when referenced in a browser
  },
  devtool: 'source-map',
  module: {
    // where we defined file patterns and their loaders

    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        include: `${__dirname}/src/assets/`,
        options: {
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      inject: 'body',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets',
        to: './assets',
      },
    ]),
  ],
  devServer: {
    // configuration for webpack-dev-server
    contentBase: `${__dirname}/dist`, // source of static assets
    port: 7700, // port to run dev-server
  },
};
