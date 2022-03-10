import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/RegisterOrLogin/RegisterOrLogin.vue";
import MainPage from "@/components/MainPage.vue";
import CloudMusicInterface from "@/views/CloudMusicInterface/CloudMusicInterface.vue";
import Table from "@/views/Table.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "mainPage",
      meta: {
        requireAuth: true // 判断是否需要登录
      },
      component: MainPage,
      children: [
        // 当 /mainPage 匹配成功，
        // echart 会被渲染在 mainPage 的 <router-view> 中
        {
          path: "/cloudMusic",
          name: "cloudMusic",
          meta: {
            navTitle: "音乐界面",
            disabled: true // 是否可用
          },
          component: CloudMusicInterface,
          // 之后若是在音乐界面左边的导航菜单下添加新的功能菜单时，则在这个地方添加路由即可
          children: [
            {
              path: "/cloudMusic/foundMusic",
              name: "foundMusic",
              meta: {
                navTitle: "发现音乐",
                disabled: false // 是否可用
              },
              component: () =>
                import(
                  /* webpackChunkName: "foundMusic" */ "@/views/FoundMusic/FoundMusic.vue"
                )
            },
            {
              path: "/fm",
              name: "fm",
              meta: {
                navTitle: "私人FM",
                disabled: false // 是否可用
              },
              component: () =>
                import(/* webpackChunkName: "foundMusic" */ "@/views/Table.vue")
            }
          ]
        },
        {
          path: "/table",
          name: "table",
          meta: {
            navTitle: "table显示",
            disabled: true // 是否可用
          },
          component: Table
        }
      ]
    },
    // {
    //   path: "/echart",
    //   name: "echart",
    //   component: () =>
    //     import(/* webpackChunkName: "echart" */ "./views/Echart.vue")
    // },
    {
      path: "/testEchart",
      name: "testEchart",
      component: () =>
        import(
          /* webpackChunkName: "testEchart" */ "./views/test/testEchart.vue"
        )
    }
  ]
});
