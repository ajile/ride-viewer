const path = require('path');
const webpack = require('webpack');
const package = require("./package.json");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env = {}) => {
  const isProduction = env.NODE_ENV === 'production';
  return {
    context: __dirname,

    // Генерировать Source Map файлы, чтобы было удобнее дебажить приложение. Любая отссылка в
    // консоле теперь будет вести в исходный модуль, а не в обфусцированный бандл-файл. Также
    // при использовании IDE можно будет удобным образом открыть модуль прямо из консоли.
    devtool: 'source-map',

    entry: [
      'react-hot-loader/patch',
      './src/index.js',
      './styles/index.scss'
    ],

    output: {
      path: __dirname + '/dist',
      publicPath: "/",
      filename: '[name].js'
    },

    module: {
      rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
        { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader", "eslint-loader"] },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            "css-loader",
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                includePaths: [
                  "./node_modules/bootstrap-sass/assets/stylesheets"
                ]
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          query: {
            limit: '10000',
            mimetype: 'application/svg+xml'
          }
        },
        {
          test: /\.(eot|woff|woff2|ttf)$/,
          loader: 'file-loader'
        },
      ]
    },

    // Определяем резолвер, чтобы можно было импортировать JS модули по абсолютному, а не по
    // относительному пути, что читается удобнее. Импортировать модули теперь можно следующим
    // образом: `import foo from "app-name/foo"`.
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      alias: { [package.name]: path.resolve(__dirname, 'src/') }
    },

    // Настройки сервера
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 9000,
      compress: true,

      // Отключение показа в консоли сообщений, связанных с горячей перезагрузкой модулей. Сообщений
      // бывает слишком много, они засоряют консоль, тем самым усложняют процесс отладки.
      clientLogLevel: 'none',

      // Показывать процесс сборки приложения в консоле. Может быть полезным для обнаружения
      // медленных процессов.
      progress: true
    },

    plugins: [
      new HtmlWebpackPlugin({ template: 'public/index.html' }),
      new MiniCssExtractPlugin({ filename: "[name].css", chunkFilename: "[id].css" }),
      new webpack.HotModuleReplacementPlugin(),
      new WriteFilePlugin()
    ]  
  }
};
