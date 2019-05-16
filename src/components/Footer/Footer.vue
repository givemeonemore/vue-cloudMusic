<template>
  <div class="footer"> 这里是底部提示 ©2019 Created by ZhouRan </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style scoped>
.footer {
  height: 100%;
  text-align: center;
  padding: 10px 20px;
  font-weight: bold;
  background: #fff;
  border-top: 1px solid #e5e5e5;
  box-shadow: 0 3px 2px -2px rgba(200,200,200,.15);
}
</style>
