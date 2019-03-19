const path = require('path')

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'// 指定静态资源文件，区分文件前缀，cdn缓存
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    },
    {
      test: /.jsx|.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
