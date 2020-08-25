module.exports = {
  // baseUrl  type:{string} default:'/'
  // 将部署应用程序的基本URL
  // 将部署应用程序的基本URL。
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.
  // baseUrl: process.env.NODE_ENV === "production" ? "/" : "/",
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  outputDir: "build",
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  devServer: {
    proxy: {
      "/api": {
        //虚拟目录
        target: "https://devhub.amorepacific.com.cn:8080/", //地址
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", //由于上面的虚拟目录实际上是不存在的，不去掉的话会变成'http://127.0.0.1:3000/api'，所以得去掉
        },
      },
    },
    port: process.env.PORT || 8099,
  },
};
