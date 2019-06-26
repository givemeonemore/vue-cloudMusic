<template>
  <div class="single-song-list" @click="handleSingleListItem">
    <div class="single-song-list-content">
      <span class="single-song-list-content-vip">{{isVip}}</span>
      <span class="single-song-list-content-broadcast-num">{{computedBroadcastNum}}</span>
      <!-- <div class="single-song-list-img" ></div> -->
      <img class="single-song-list-content-img" :src="imgSrc" />
    </div>
    <div class="single-song-list-title">
      <span class="single-song-list-title-info">{{titleName}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class SingleRecommendSongList extends Vue {
  @Prop({default: {} }) songListDataProp!: object;
  public songListData: any = {};
  showVip: boolean = false;

  created() {
    this.songListData = this.songListDataProp;
    // this.imgSrc = this.songListData.bgImg;
  }

  // computed
  get computedBroadcastNum() {
    if (this.songListData.songListBroadcastNum > 10000) {
      let num: string = "";
      let strNum: string = "";
      num = (this.songListData.songListBroadcastNum/10000).toFixed(1);
      strNum = num.toString() + "万";
      return strNum;
    } else {
      return this.songListData.songListBroadcastNum;
    }
  }

  get imgSrc() {
    if (this.songListData) {
      return this.songListData.bgImg;
    }
  }

  get titleName() {
    if (this.songListData) {
      return this.songListData.songListName;
    }
  }

  // 判断是不是VIP专享额歌单
  get isVip() {
    if (this.songListData && this.songListData.isVip) {
      return "VIP专享";
    } else {
      return ""
    }
  }

  // 对于单个歌单的点击事件，查看歌单的详细信息
  handleSingleListItem() {
    if (this.songListData) {
      alert(this.songListData.songListId);
    }
  }

}
</script>

<style scoped lang="less">
.single-song-list {
  width: 200px;
  height: 220px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  &-content {
    width: 200px;
    height: 200px;
    &-vip {
      position: absolute;
      left: 0;
      color: red;
      z-index: 10;
    }
    &-broadcast-num {
      width: 120px;
      text-align: right;
      padding-right: 10px;
      position: absolute;
      line-height: 1.5;
      right: 0;
      color: #ffffff;
      z-index: 10;
      background: -webkit-linear-gradient(left, #ffffff6b , #000000b8); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, #ffffff6b, #000000b8); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #ffffff6b, #000000b8); /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #ffffff6b , #000000b8); /* 标准的语法 */
    }
    &-img {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  &-title {
    width: 100%;
    height: 20px;
    text-align: center;
    &-info {
      height: 20px;
      line-height: 20px;
      font-size: 15px;
    }
  }
}
</style>
