const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const pages = [
  'index',
  'base',
  'enter-email',
  'header',
  'base',
  'almost-ready',
  'profile-personal',
  'resset-pass',
  'sign-in',
  'sign-up',
  'sign-up-2',
  'sign-up-3',
  'sign-up-4',
  'sign-up-5',
  'sign-up-6',
  'profile-1',
  'profile-2',
  'search-1',
  'search-2',
  'admin',
];
const pagesForPlugin = [];
pages.forEach((page) => {
  pagesForPlugin.push(
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `./src/templates/${page}.html`,
    })
  );
});

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                [
                  '@babel/preset-env',
                  // {
                  //   targets: {
                  //     esmodules: true
                  //   },
                  // },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: ['./src/templates'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        // use: ['file?name=assets/[name].[hash].[ext]']
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]', // Not sure if this actually works like it did in Webpack 1
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [new ExtractTextPlugin('css/main.css'), ...pagesForPlugin],
};
