// 根据不同的环境设定不同的baseUrl,在配置这个文件前，我们先需要做以下几件事
// 1.更鲁姆新建.env.dev 文件并在文件内写入 NODE_ENV = 'dev'
// 2.在package.json文件内添加
//  "build:dev": "vue-cli-service build --mode dev",
//  "build:pre": "vue-cli-service build --mode pre",
//  结束之后，才能是以下代码生效
let baseUrl = './api';
switch (process.env.NODE_ENV) {
  case 'dev':
    baseUrl = 'http://xxxx.com'; // 测试环境url
    break;
  case 'pre':
    baseUrl = 'http://xxxx.com'; // 测试环境url
    break;
  case 'production':
    baseUrl = 'http://xxxx.com'; // 生产环境url
    break;
}

export default baseUrl;
