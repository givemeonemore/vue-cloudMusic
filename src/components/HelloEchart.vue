<template>
  <div class="my-chart" id="myChart"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class HelloEchart extends Vue {
  public $echarts: any;
  private mounted(): void {
    this.drawLine();
  }
  private drawLine(): void {
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(document.getElementById("myChart"));
    // 绘制图表
    myChart.setOption({
      title: { text: "在Vue中使用echarts" },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
}
</script>

<style scoped lang="less">
.my-chart {
  width: 300px;
  height: 300px;
}
</style>
