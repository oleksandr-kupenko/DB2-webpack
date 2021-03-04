const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: [
                [
                  "@babel/preset-env",
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
        test: /\.sass$/,
        // use standalone css file
        use: ExtractTextPlugin.extract({
          use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
          fallback: "style-loader",
        }),
        // use injected css inside js bundle
        // use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.njk$/,
        use: [
          "html-loader",
          {
            loader: "nunjucks-html-loader",
            options: {
              searchPaths: ["./src/templates"],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin("main.css"),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    // }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/templates/index.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "another.html",
      template: "./src/templates/another.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "more.html",
      template: "./src/templates/more.njk",
    }),
  ],
};
