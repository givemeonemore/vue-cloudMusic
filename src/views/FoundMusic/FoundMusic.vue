<template>
  <div class="found-music-body">
    <div class="found-music-body-carousel">
      <carousel :imgList="imgList" v-if="haveImgLists"></carousel>
    </div>
    <div class="found-music-body-recommend">
      <div class="found-music-body-recommend-title">
        <span class="found-music-body-recommend-title-info">推荐歌单</span>
        <span class="found-music-body-recommend-title-more" @click="hangleMoreMusic">查看更看>>></span>
      </div>
      <recommend-song-lists></recommend-song-lists>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Carousel from "@/components/Carousel/Carousel.vue";
import RecommendSongLists from "./RecommendSongLists/RecommendSongLists.vue";

@Component({
  components: {
    Carousel,
    RecommendSongLists
  }
})
export default class FoundMusic extends Vue {
  imgList: Array<object> = [];
  haveImgLists: boolean = false;

  created() {
    this.haveImgLists = false;
    this.getImgList();
  }

  // methods
  async getImgList() {
    try {
      // 定义参数对象
      let params: any = {};
      let res: any = await this.$api.matches.getJson("static/mockJson/carousel.json", params);
      if (res.data) {
        this.imgList = res.data;
        this.haveImgLists = true;
      }
    } catch(err) {
      this.haveImgLists = false;
      console.log("错误" + err);
    }
  }

  // 更多音乐，显示所有的音乐
  hangleMoreMusic() {
    alert("hahaah")
  }
}
</script>

<style scoped lang="less">
.found-music-body {
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
  &-carousel {
    padding: 10px 200px;
  }
  &-recommend {
    padding: 10px 200px;
    &-title {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #e3e3e3;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      &-info {
        font-size: 25px;
        height: 50px;
        line-height: 50px;
      }
      &-more {
        font-size: 15px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
      }
    }
  }
}
</style>
