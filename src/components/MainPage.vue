<template>
  <div class="main-page">
    <Header class="header"></Header>
    <MainBody class="main-body"></MainBody>
    <Footer class="footer"></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./Header/Header.vue";
import MainBody from "./MainBody/MainBody.vue";
import Footer from "./Footer/Footer.vue";

@Component({
  components: {
    Header,
    MainBody,
    Footer
  }
})
export default class MainPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-page {
  height: 100%;
  position: relative;
  .header {
    height: 50px;
    position: relative;
  }
  .main-body {
    height: calc(~"100vh - 92px");
    position: relative;
  }
  .footer {
    height: 20px;
    position: relative;
  }
}
</style>
