module.exports = {
  publicPath: './',
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
  }
}