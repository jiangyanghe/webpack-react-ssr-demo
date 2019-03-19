const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.config.base')

module.exports = webpackMerge(webpackBase, {
  mode: 'development',
  target: 'node', // 指定执行环境1
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  }
})
