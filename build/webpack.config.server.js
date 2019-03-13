const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',//指定执行环境
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',//指定静态资源文件，区分文件前缀，cdn缓存
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /.jsx|.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
}