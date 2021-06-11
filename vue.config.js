const path = require('path');
module.exports = {
  publicPath: './',
  // 全局less文件
  pluginOptions: {
    "style-resources-loader": { 
      preProcessor: "less", 
      patterns: [
        path.resolve(__dirname, "./src/core/global.less")
      ] 
    }
  },
  devServer: {
    // development server port 8000
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': 'http://localhost:3000' },
        ws: false,
        changeOrigin: true
      }
    }
  },
  // 生产禁止使用sourcemap
  productionSourceMap: false
}