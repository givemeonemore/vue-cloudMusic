<template>
  <el-table :data="tableData" height="250" border style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Table extends Vue {
  tableData: Array<object> = [
    {
      date: "2016-05-03",
      name: "张三",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-02",
      name: "李四",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-04",
      name: "王五",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-01",
      name: "赵六",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-08",
      name: "徐凤年",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-06",
      name: "徐志虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-07",
      name: "许嵩",
      address: "上海市普陀区金沙江路 1518 弄"
    }
  ];
}
</script>

<style scoped lang="less"></style>
