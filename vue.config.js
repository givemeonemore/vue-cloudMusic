const path = require("path");
const sourceMap = process.env.NODE_ENV === "development";

module.exports = {
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // webpack配置
  chainWebpack: () => {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置
      config.mode = "production";
    } else {
      // 为开发环境修改配置
      config.mode = "development";
    }
    Object.assign(config, {
      // 开发生成共同配置
      resolve: {
        extensions: [".js", ".vue", ".json", ".ts", "tsx"],
        alias: {
          vue$: "vue/dist/vue.js",
          "@": path.resolve(__dirname, "./src")
        }
      }
    });
  },
  // 生产环境是否生成sourceMap文件
  productionSourceMap: sourceMap,
  // css 配置
  css: {
    // 是否使用css分离插件ExtractTextPlygin
    extract: true,
    // 是否开启CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 是否启用CSS modules for all css / pre-processor files
    modules: false
  },

  // use thread-loader for babel & TS production build, 将线程加载器用于BABEL&TS生产构建
  // enabled by default if the machine has more than 1 cores, 如果机器有1个以上的内核，则默认启用
  parallel: require("os").cpus().length > 1,

  // PWA插件相关配置
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin", // 列举node运行的操作系统的环境，只会显示内核相关的信息，如：linux2， darwin，而不是“Redhat ES3” ，“Windows 7”，“OSX 10.7”等
    host: "localhost",
    port: 3001, // 8080
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      // proxy all requests
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    before: app => {}
  },
  // 第三方插件配制
  pluginOptions: {
    // ……
  }
};
