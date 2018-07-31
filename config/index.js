'use strict'
const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    host: 'localhost',
    port: 8889,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    /**
     * 解决打包后页面出现空白的问题(npm run build)
     */
    assetsPublicPath: './',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  test: {
    index: path.resolve(__dirname, '../test/index.html'),
    assetsRoot: path.resolve(__dirname, '../test'),
    assetsSubDirectory: 'static',
    /**
     * 解决打包后页面出现空白的问题(npm run test)
     */
    assetsPublicPath: './',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
