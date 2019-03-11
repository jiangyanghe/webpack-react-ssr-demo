const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public'//指定静态资源文件，区分文件前缀，cdn缓存
  },
  module: {
    rules: [{
      test: /.jsx$/,
      loader: 'babel-loader'
    }]
  }
}