<template>
  <div class="single-song-list">
    <span class="single-song-list-vip">VIP专享</span>
    <span class="single-song-list-broadcast-num">{{songListBroadcastNum}}</span>
    <div class="single-song-list-img" ></div>
    <!-- <img class="single-song-list-img" :src="imgSrc" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class SingleRecommendSongList extends Vue {
  @Prop({default: {} }) songListDataProp!: object;
  songListData: object = {};
  imgSrc: string = "";
  showVip: boolean = false;
  songListBroadcastNum: string = "5";

  created() {
    this.songListData = this.songListDataProp;
  }

}
</script>

<style scoped lang="less">
.single-song-list {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
  &-vip {
    position: absolute;
    left: 0;
    color: red;
  }
  &-broadcast-num {
    position: absolute;
    line-height: 1.5;
    right: 0;
    color: blue;
  }
  &-img {
    position: relative;
  }
}
</style>
