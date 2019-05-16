import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import Echart from "echarts";
import api from '@/api/install';
// 引入iconf样式
import "./icon/iconfont/iconfont.css";

// 声明下vue.use 和 vue.prototype的区别
// 不是为了vue写的插件（插件内要处理）的不支持Vue.use()加载方式
// 非vue官方库不支持new Vue()方式
// 但是，每一个vue组件都是Vue的实例，所以组件内this可以拿到Vue.prototype上添加的属性和方法
// 其他页面在使用 axios 的时候直接  this.$http 就可以了
// 其他页面在使用 urls 的时候直接  this.$urls 就可以了
Vue.config.productionTip = false;  // 是否在启动时生成生产提示，类型为boolean，设置为 false 以阻止 vue 在启动时生成生产提示
Vue.use(ElementUI);
Vue.use(api);
Vue.prototype.$echarts = Echart;

router.beforeEach((to, from, next) => {
  // 判断路由是否需要登录
  if (to.matched.some(record => record.meta.requireAuth )) {
    if (window.localStorage.token) {
      // 判断当前的token是否存在；即登录时存入的token
      next();
    } else {
      next({
        name: "login",
        params: {} // 将跳转的路由path作为参数，登录成功后跳转到主页
      })
    }
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
