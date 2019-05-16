<template>
  <div class="header-nav" ref="headerNav">
    <div v-for="(item, i) in HeaderNavTitleList" :key="i" :class="getHeaderNavTitleClass(item)" :ref="item.name" @click="routerSkip(item)">
      <span class="header-nav-title-name">{{item.meta.navTitle}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component
export default class HeaderNavTitle extends Vue {
  // 这里获取的数据已经将router中的数据进行过滤了，只将存在children的router传递
  @Prop({ default: [] }) HeaderNavTitleListProp!: Array<any>;
  // 初始化数据，也就是正常情况下的return data
  HeaderNavTitleList: any = [];

  created() {
    this.HeaderNavTitleList = this.HeaderNavTitleListProp;
    // 默认触发第一个，之后若是有需求可以随时更改
    if (this.HeaderNavTitleList) {
      this.HeaderNavTitleList.forEach((item: any, index: number) => {
        // 检测是否有保存在storage中的路由信息
        let routerInfo = window.localStorage.getItem('routerInfo');
        if (routerInfo) {
          // 读取保存在localStorage中的路由信息，以便路由返回在当前路由下
          let routerInfoObj = JSON.parse(routerInfo);
          window.localStorage.removeItem('routerInfo');
          this.routerSkip(routerInfoObj);
        } else {
          if (index === 0 && item.name) {
            this.routerSkip(item);
          }
        }
      });
    }
  }

  // 根据其定义的字段来确定其是否可点击的样式
  getHeaderNavTitleClass(item: any) {
    if (item.meta.disabled) {
      return "header-nav-title-unseleted";
    } else {
      return "header-nav-title-disabled";
    }
  }

  // 根据其名称判断是否有被选中
  getHeaderNavTitleSelect(name: string) {
    // 动态获取渲染后title的宽度并计算其应该距左（或者距右）的距离
    let headerNavWidth = parseFloat((this.$refs.headerNav as any).clientWidth);
    (this.$refs.headerNav as any).style.left = (0 - headerNavWidth / 2) + "px";
    for (let key in this.$refs) {
      if (this.$refs[key] && key !== "headerNav") {
        // 剔除掉原本不可进行点击的title
        if ((this.$refs[key] as any)[0].className !== "header-nav-title-disabled") {
          (this.$refs[key] as any)[0].className = "header-nav-title-unseleted";
        }
      }
    }
    if (this.$refs[name]) {
      (this.$refs[name] as any)[0].className = "header-nav-title-seleted";
    }
  }

  // 跳转到具体的子节点下
  routerSkip(item: any) {
    // 只有在 title 设置了disabled = true的时候，才可以进行路由跳转
    if (item.meta && item.meta.disabled) {
      if (item.name) {
        this.$nextTick(() => {
          this.getHeaderNavTitleSelect(item.name);
          // 保存路由信息至localStorage中，以便在刷新的时候不会跳转到默认的路由下
          let itemJson = JSON.stringify(item);
          window.localStorage.setItem('routerInfo', itemJson);
        });
        this.$router.push({
          name: item.name,
          params: {}
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.header-nav {
  height: 50px;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  .header-nav-title-seleted {
    cursor: pointer;
    width: 100px;
    height: 47px;
    display: inline-block;
    text-align: center;
    position: relative;
    border-bottom: 3px solid #00ff00;
  }
  .header-nav-title-unseleted {
    cursor: pointer;
    width: 100px;
    height: 50px;
    text-align: center;
    display: inline-block;
    position: relative;
  }
  .header-nav-title-disabled {
    cursor: not-allowed;
    width: 100px;
    height: 50px;
    text-align: center;
    display: inline-block;
    position: relative;
  }
}
</style>
