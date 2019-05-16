// 该文件可以将我们所有的api接口安装到全局，之后我们在main.js文件中导入就可以了
import apiList from './apiList';

let install: any = {};
install.installed = false;

install = function(Vue: { prototype: any; }) {
  if (install.installed) {
    return
  }
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiList
      }
    }
  })
}

export default {
  install
}
