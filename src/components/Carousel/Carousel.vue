<template>
  <el-carousel :interval="4000" type="card">
    <el-carousel-item v-for="(item, i) in imgLists" :key="i">
      <img :src="item.src" :alt="item.name" style="width:100%; height: 100%;"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Home extends Vue {
    @Prop({ default: [] }) imgList!: Array<object>;
    imgLists: Array<object> = [];

    created() {
      this.imgLists = this.imgList;
    }
}
</script>

<style scoped lang="less">
/deep/ .el-carousel__container {
  height: 250px !important;
}

.el-carousel__item h3 {
  color: #fff;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
