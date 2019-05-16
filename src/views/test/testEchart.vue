<template>
  <div class="echart">

    <HelloEchart></HelloEchart>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloEchart from "@/components/HelloEchart.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloEchart
  }
})
export default class Echart extends Vue {}
</script>
