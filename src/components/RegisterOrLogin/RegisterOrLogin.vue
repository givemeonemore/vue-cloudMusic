<template>
  <div class="registerOrLogin-content">
    <sakura-animate></sakura-animate>
    <div class="registerOrLogin-content-form">
      <div class="registerOrLogin-content-form-info">Sign In</div>
      <div :class="userNameClass">
        <el-input placeholder="请输入内容" v-model="input">
          <i slot="prefix" class="iconfont icon-wode"></i>
        </el-input>
      </div>
      <div :class="passwordClass">
        <el-input placeholder="请输入内容" v-model="input2">
          <i slot="prefix" class="iconfont icon-jiesuo"></i>
        </el-input>
      </div>
      <div class="registerOrLogin-content-form-tips">
        Forgot
        <span
          class="registerOrLogin-content-form-tips-userName"
          @click="getUserName"
          >userName</span
        >
        or
        <span
          class="registerOrLogin-content-form-tips-password"
          @click="getPassword"
          >Password</span
        >
        ?
      </div>
      <div class="registerOrLogin-content-form-button">
        <el-button
          class="registerOrLogin-content-form-button-success"
          @keyup.enter.native="handleLogIn"
          @click="handleLogIn"
          type="success"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { setCookie } from "@/utils/utils";
import { Component, Vue, Watch } from "vue-property-decorator";
import SakuraAnimate from "@/components/SakuraAnimate/SakuraAnimate.vue";
@Component({
  components: {
    SakuraAnimate
  }
})
export default class RegisterOrLogin extends Vue {
  // 初始化数据，也就是正常情况下的return data
  input: any = "";
  input2: any = "";
  // 自定义用户名输入框的样式
  userNameClass: string = "registerOrLogin-content-form-userName";
  // 自定义密码输入框的样式
  passwordClass: string = "registerOrLogin-content-form-password";

  created() {
    window.localStorage.clear();
    this.$nextTick(() => {
      let that = this;
      document.onkeydown = e => {
        let key = e.keyCode;
        if (key === 13) {
          that.handleLogIn();
        }
      };
    });
  }

  // methods
  // 获取用户名
  getUserName() {
    this.$message("哈哈哈，忘记用户名了吧！");
  }
  // 获取密码
  getPassword() {
    this.$message("哈哈哈，忘记密码了吧！");
  }

  @Watch("input")
  onInputChanged(val: any) {
    // if (val !== "") {
    //   this.userNameClass = "registerOrLogin-content-form-userName";
    // }
    if (val !== "" && val === "13167070902") {
      this.handeleNoCodeLogin(val);
    }
  }

  @Watch("input2")
  onInput2Changed(val: any) {
    if (val !== "") {
      this.passwordClass = "registerOrLogin-content-form-password";
    }
  }

  // 用户登录
  handleLogIn() {
    if (this.input === "" && this.input2 === "") {
      this.$message("请填写用户名和密码！");
      this.userNameClass = "registerOrLogin-content-form-userName-red-border";
      this.passwordClass = "registerOrLogin-content-form-password-red-border";
    } else if (this.input === "") {
      // 用户名红线提示
      this.userNameClass = "registerOrLogin-content-form-userName-red-border";
      this.$message("请填写用户名！");
    } else if (this.input2 === "") {
      // 密码红线提示
      this.passwordClass = "registerOrLogin-content-form-password-red-border";
      this.$message("请填写密码！");
    } else {
      this.getUserInfo();
    }
  }

  async handeleNoCodeLogin(val: string) {
    try {
      // 定义参数对象
      let params: any = {};
      let res: any = await this.$api.matches.getLogin(
        "account/v1/test/login/validate/" + val,
        params
      );
      if (res.data) {
        this.getNoCodeUserInfo();
      }
    } catch (err) {
      console.log("错误" + err);
    }
  }

  async getNoCodeUserInfo() {
    try {
      // 定义参数对象
      let params: any = {};
      let res: any = await this.$api.matches.getLogin("user/user", params);
      if (res.data) {
        // this.getNoCodeUserInfo();
        console.log(res.data);
      }
    } catch (err) {
      console.log("错误" + err);
    }
  }

  // 获取用户信息
  async getUserInfo() {
    try {
      // 定义参数对象
      let params: any = {};
      let res: any = await this.$api.matches.getJson(
        "static/mockJson/user.json",
        params
      );
      if (res.data) {
        res.data.forEach((item: any) => {
          if (this.input === item.userName && this.input2 === item.password) {
            this.$message.success("登录成功！");
            // 测试setCookie方法
            // setCookie('userName', res.data.userName, 3600);
            window.localStorage.setItem("token", "1234");
            window.localStorage.setItem("userName", item.userName);
            window.localStorage.setItem("password", item.password);
            window.localStorage.setItem("avator", item.avator);
            window.sessionStorage.userInfo = item;
            this.$router.push({
              name: "mainPage",
              params: {
                userInfo: item
              }
            });
          }
        });
      }
    } catch (err) {
      console.log("错误" + err);
    }
  }
}
</script>

<style scoped lang="less">
.registerOrLogin-content {
  width: 100%;
  height: 100%;
  &-form {
    color: #fff;
    position: relative;
    left: 0;
    top: 0;
    margin: 0 auto;
    /* margin-left: calc(50% - 150px); */
    margin-top: calc(25% - 150px);
    width: 300px;
    height: 300px;
    background: rgba(84, 79, 83, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.1);
    &-info {
      width: 100%;
      text-align: center;
      font-size: 22px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      // height: 100%;
    }
    &-userName {
      margin-top: 20px;
      margin-left: 5%;
      width: 90%;
      /deep/ .el-input__inner {
        background: rgba(84, 79, 83, 0.5);
        color: #fff;
      }
      .iconfont {
        font-size: 20px;
        vertical-align: middle;
        line-height: 40px;
      }
    }
    &-userName-red-border {
      margin-top: 20px;
      margin-left: 5%;
      width: 90%;
      /deep/ .el-input__inner {
        border: 1px solid red;
        background: rgba(84, 79, 83, 0.5);
        color: #fff;
      }
      .iconfont {
        font-size: 20px;
        vertical-align: middle;
        line-height: 40px;
      }
    }
    &-password {
      margin-top: 20px;
      margin-left: 5%;
      width: 90%;
      /deep/ .el-input__inner {
        background: rgba(84, 79, 83, 0.5);
        color: #fff;
      }
      .iconfont {
        font-size: 20px;
        vertical-align: middle;
        line-height: 40px;
      }
    }
    &-password-red-border {
      margin-top: 20px;
      margin-left: 5%;
      width: 90%;
      /deep/ .el-input__inner {
        border: 1px solid red;
        background: rgba(84, 79, 83, 0.5);
        color: #fff;
      }
      .iconfont {
        font-size: 20px;
        vertical-align: middle;
        line-height: 40px;
      }
    }
    &-tips {
      margin-top: 20px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      &-userName {
        cursor: pointer;
        text-decoration: underline;
      }
      &-password {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    &-button {
      margin-top: 20px;
      margin-left: 5%;
      width: 90%;
      &-success {
        width: 100%;
      }
    }
  }
}
</style>
