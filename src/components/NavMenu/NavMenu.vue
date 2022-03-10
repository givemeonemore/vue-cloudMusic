<template>
  <div class="menu-content">
    <div :class="menuContentAreaCollapse">
      <el-menu
        default-active="1-1"
        :default-openeds="openedsList"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        @select="selectItem"
      >
        <el-submenu index="1">
          <template slot="title">
            <span slot="title">推荐</span>
          </template>
          <el-menu-item index="1-1">
            <span ref="menuItem1-1"></span>
            <i class="iconfont icon-yinle"></i>
            <span class="menu-content-menu-item-title" slot="title"
              >发现音乐</span
            >
          </el-menu-item>
          <el-menu-item index="1-2">
            <span ref="menuItem1-2"></span>
            <i class="iconfont icon-fm"></i>
            <span class="menu-content-menu-item-title" slot="title"
              >私人FM</span
            >
          </el-menu-item>
          <el-menu-item index="1-3">
            <span ref="menuItem1-3"></span>
            <i class="iconfont icon-shipin"></i>
            <span class="menu-content-menu-item-title" slot="title">MV</span>
          </el-menu-item>
          <el-menu-item index="1-4">
            <span ref="menuItem1-4"></span>
            <i class="iconfont icon-haoyou"></i>
            <span class="menu-content-menu-item-title" slot="title">朋友</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span slot="title">我的音乐</span>
          </template>
          <el-menu-item index="2-1">
            <span ref="menuItem2-1"></span>
            <i class="iconfont icon-bendiyinle"></i>
            <span class="menu-content-menu-item-title" slot="title"
              >本地音乐</span
            >
          </el-menu-item>
          <el-menu-item index="2-2">
            <span ref="menuItem2-2"></span>
            <i class="iconfont icon-xiazaiguanli"></i>
            <span class="menu-content-menu-item-title" slot="title"
              >下载管理</span
            >
          </el-menu-item>
          <el-menu-item index="2-3">
            <span ref="menuItem2-3"></span>
            <i class="iconfont icon-yunpan"></i>
            <span class="menu-content-menu-item-title" slot="title"
              >我的音乐云盘</span
            >
          </el-menu-item>
          <el-menu-item index="2-4">
            <span ref="menuItem2-4"></span>
            <i class="iconfont icon-wodeshoucang"></i>
            <span class="menu-content-menu-item-title" slot="title"
              >我的收藏</span
            >
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span slot="title">创建的歌单</span>
          </template>
          <el-menu-item index="3-1">
            <span ref="menuItem3-1"></span>
            <i class="iconfont icon-xihuan"></i>
            <span class="menu-content-menu-item-title" slot="title"
              >我喜欢的音乐</span
            >
          </el-menu-item>
          <el-menu-item
            index="3-2"
            :key="key"
            v-for="(item, key) in createMusicLists"
          >
            <span :ref="item.refKey"></span>
            <i class="iconfont icon-playlist"></i>
            <span class="menu-content-menu-item-title" slot="title">{{
              item.name
            }}</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span slot="title">收藏的歌单</span>
          </template>
          <el-menu-item
            index="4-1"
            :key="key"
            v-for="(item, key) in collectMusicLists"
          >
            <span :ref="item.refKey"></span>
            <i class="iconfont icon-playlist"></i>
            <span class="menu-content-menu-item-title" slot="title">{{
              item.name
            }}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="menu-content-collapse" @click="handleCollapse">
      <i class="iconfont" :class="collapseDirection"></i>
    </div>
  </div>
</template>

<script lang="ts">
interface musicItem {
  name: string;
  key: string;
  refKey: string;
}
import { Component, Vue } from "vue-property-decorator";
@Component
export default class NavMenu extends Vue {
  isCollapse: boolean = false; // 是否为收起状态
  collapseDirection: string = "icon-zuo"; // 箭头的指向
  menuContentAreaCollapse: string = "menu-content-area"; // 默认的css样式
  openedsList: Array<number> = [1]; // 默认展开的菜单
  // TODO 创建的歌单，目前是写死测试。
  createMusicLists: Array<musicItem> = [
    {
      name: "我的歌单1",
      key: "3-2",
      refKey: "menuIten3-2"
    },
    {
      name: "我的歌单2",
      key: "3-3",
      refKey: "menuIten3-3"
    },
    {
      name: "我的歌单3",
      key: "3-4",
      refKey: "menuIten3-4"
    },
    {
      name: "我的歌单4",
      key: "3-5",
      refKey: "menuIten3-5"
    }
  ];
  // TODO 收藏的歌单，目前是写死测试。
  collectMusicLists: Array<musicItem> = [
    {
      name: "收藏的歌单1",
      key: "4-1",
      refKey: "menuIten4-1"
    },
    {
      name: "收藏的歌单2",
      key: "4-2",
      refKey: "menuIten4-2"
    },
    {
      name: "收藏的歌单3",
      key: "4-3",
      refKey: "menuIten4-3"
    },
    {
      name: "收藏的歌单4",
      key: "4-4",
      refKey: "menuIten4-4"
    }
  ];

  created() {
    this.$nextTick(() => {
      this.selectItem("1-1");
    });
  }
  // methods
  handleCollapse() {
    this.collapseDirection =
      this.collapseDirection === "icon-zuo" ? "icon-you" : "icon-zuo";
    this.isCollapse = this.isCollapse === false ? true : false;
    this.menuContentAreaCollapse =
      this.menuContentAreaCollapse === "menu-content-area"
        ? "menu-content-area-collapse"
        : "menu-content-area";
  }
  handleOpen(key: number, keyPath: string) {
    console.log(key, keyPath);
  }
  handleClose(key: number, keyPath: string) {
    console.log(key, keyPath);
  }
  selectItem(index: string) {
    let refs = this.$refs;
    let vm = this;
    for (let key in refs) {
      if (key.indexOf(index) > -1) {
        this.$nextTick(() => {
          (refs[key] as any).className =
            "menu-content-menu-item-left-select-item";
          // 初始化进来的时候，可能会出现dom树渲染的时候
          let clickName = (refs[key] as any).parentElement.children[
            (refs[key] as any).parentElement.children.length - 1
          ].innerHTML;
          let cloudMusicChildRouter: Array<any> = [];
          if (vm.$router.options.routes && vm.$router.options.routes.length) {
            cloudMusicChildRouter =
              (vm.$router.options.routes[1] &&
                vm.$router.options.routes[1].children &&
                vm.$router.options.routes[1].children[0].children) ||
              [];
          }
          cloudMusicChildRouter.forEach((item: any) => {
            if (item.meta.navTitle === clickName) {
              this.$router.push({
                name: item.name,
                params: {}
              });
            }
          });
        });
      } else {
        (refs[key] as any).className = "";
      }
    }
  }
}
</script>

<style scoped lang="less">
.menu-content {
  width: 100%;
  height: 100%;
  &-area {
    width: calc(~"100% - 30px");
    transition: width 0.7s;
    height: 100%;
    border-right: 1px solid #e3e3e3;
    position: relative;
    display: inline-block;
    .el-menu::-webkit-scrollbar {
      display: none;
    }
    .el-menu {
      height: 100%;
      overflow: auto;
      border: none;
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
        min-height: 400px;
        border: none;
      }
      .el-submenu {
        .is-active {
          background-color: #409eff1a;
        }
      }
    }
    .menu-content-menu-item-left-select-item {
      position: absolute;
      left: 0;
      width: 5px;
      height: 100%;
      background-color: #409eff;
    }
    .menu-content-menu-item-title {
      padding: 0 5px;
    }
  }
  &-area-collapse {
    width: 64px;
    transition: width 0.7s;
    height: 100%;
    border-right: 1px solid #e3e3e3;
    position: relative;
    display: inline-block;
    .el-menu {
      border: none;
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
        min-height: 400px;
        border: none;
      }
    }
  }

  &-collapse {
    cursor: pointer;
    width: 28px;
    text-align: center;
    height: 50px;
    top: calc(~"50% - 25px");
    border-radius: 0 5px 5px 0;
    border-top: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    vertical-align: top;
    position: relative;
    display: inline-block;
    .iconfont {
      font-size: 20px;
      padding: 14px 0;
      display: block;
    }
  }
}
</style>
