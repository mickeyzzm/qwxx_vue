// module.exports = {
//   transpileDependencies: true,
// };
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: './screen/', 
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: false, // 项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
    proxy: {
      "/qwxx/screenApi": {
        //代理api
        target: "https://www.baidu.com", //服务器api地址
        changeOrigin: true, //是否跨域
        logLevel: 'debug', // 设置logLevel为'debug'终端会显示真实的接口地址
        ws: true, // proxy websockets
        pathRewrite: {
          "/api": "",
        },
        onProxyRes(proxyRes,response){
          response.url = '/qwxx/screenApi'
          const realUrl = new URL(response.url,'https://www.baidu.com').href
          proxyRes.headers['x-real-url'] = realUrl
        },
      },
    },
  },
});
