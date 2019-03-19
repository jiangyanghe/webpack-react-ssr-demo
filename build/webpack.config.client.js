const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpackBase = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(webpackBase, {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
})

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'), // 服务启动地址
    hot: true, // 热更新
    overlay: {// 页面mask
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {//
      index: '/public/index.html'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
