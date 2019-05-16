<template>
  <div class="echart">
    <HelloEchart></HelloEchart>
    <Carousel></Carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloEchart from "@/components/HelloEchart.vue"; // @ is an alias to /src
import Carousel from "@/components/Carousel/Carousel.vue";

@Component({
  components: {
    HelloEchart,
    Carousel
  }
})
export default class Echart extends Vue {}
</script>
