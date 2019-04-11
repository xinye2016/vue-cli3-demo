let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    open: true // 打开浏览器窗口
  },
  // 定义less全局变量
  css: {
    loaderOptions: {
      less: {
        data: `@import "@/assets/less/global.less";`
      }
    }
  }
}
