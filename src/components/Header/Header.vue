<template>
  <div class="header-content">
    <span class="header-content-title">这里只是一个标题栏</span>
    <HeaderNavTitle
      v-if="isComplete"
      :HeaderNavTitleListProp="HeaderNavTitleList"
    ></HeaderNavTitle>
    <el-popover placement="bottom" width="20" trigger="hover">
      <div class="header-content-popover-set" @click="handleSkipUserInfoPage">
        设置
      </div>
      <div class="header-content-popover-quit" @click="handleQuit">退出</div>
      <img
        slot="reference"
        class="header-content-avator"
        ref="avatorImg"
        v-if="haveAvator"
      />
      <i slot="reference" class="iconfont icon-account-circle-line" v-else></i>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderNavTitle from "./HeaderNavTitle.vue";
@Component({
  components: {
    HeaderNavTitle
  }
})
export default class Header extends Vue {
  haveAvator: boolean = true;
  isComplete: boolean = false;
  HeaderNavTitleList: any = [];

  // lifecycle hook
  mounted() {
    this.isComplete = false;
    if (this.$route.params.userInfo !== undefined) {
      if ((this.$route.params.userInfo as any).avator) {
        this.haveAvator = true;
        (this.$refs.avatorImg as any).src = (this.$route.params
          .userInfo as any).avator;
      } else {
        this.haveAvator = false;
      }
    } else if (window.localStorage.userName) {
      if (window.localStorage.avator) {
        this.haveAvator = true;
        (this.$refs.avatorImg as any).src = window.localStorage.avator;
      } else {
        this.haveAvator = false;
      }
    }
  }

  created() {
    this.$nextTick(() => {
      this.isComplete = false;
      if (this.$router.options.routes) {
        let systemList: any = [];
        this.$router.options.routes.forEach(item => {
          if (item.meta) {
            systemList = item.children;
          }
        });
        // const systemList: any = this.$router.options.routes.filter((item: { meta: { navTitle: any; }; }) => item.meta && item.meta.navTitle);
        this.HeaderNavTitleList = systemList;
        this.isComplete = true;
      }
    });
  }

  handleSkipUserInfoPage() {
    alert("用户信息");
  }

  handleQuit() {
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("password");
    window.localStorage.removeItem("avator");
    this.$router.push({
      name: "login",
      params: {}
    });
  }
}
</script>

<style scoped lang="less">
.header-content {
  height: 100%;
  text-align: center;
  padding: 0 40px;
  line-height: 50px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.15);
  &-title {
    position: relative;
    float: left;
    color: #666;
    font-size: 24px;
    font-family: Microsoft YaHei;
  }

  &-popover-set {
    cursor: pointer;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 4px;
    text-align: center;
  }
  &-popover-quit {
    cursor: pointer;
    padding-top: 4px;
    text-align: center;
    padding-bottom: 4px;
    border-bottom: 1px solid #e3e3e3;
  }
  &-avator {
    cursor: pointer;
    margin-top: 12px;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: relative;
    float: right;
    border: 1px solid #e3e3e3;
  }
  .iconfont {
    cursor: pointer;
    font-size: 24px;
    color: #666;
    position: relative;
    float: right;
  }
}
</style>
