<template>
  <div class="cloud-music">
    <div class="cloud-music-side-bar">
      <NavMenu></NavMenu>
    </div>
    <div class="cloud-music-body">
      <router-view />
    </div>
    <div class="cloud-music-player">
      <span>这里是底部播放区域</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Carousel from "@/components/Carousel/Carousel.vue";
import NavMenu from "@/components/NavMenu/NavMenu.vue";

@Component({
  components: {
    NavMenu
  }
})
export default class CloudMusicInterface extends Vue {}
</script>

<style scoped lang="less">
.cloud-music {
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
  &-side-bar {
    width: 300px;
    position: relative;
    vertical-align: top;
    display: inline-block;
    height: calc(100% - 80px);
  }
  &-body {
    width: calc(100% - 300px);
    position: relative;
    vertical-align: top;
    display: inline-block;
    height: calc(100% - 80px);
    &-carousel {
      padding: 10px 20px;
      height: 200px;
    }
  }
  &-player {
    // position: relative;
    // display: inline-block;
    height: 80px;
    width: 100%;
  }
}
</style>
