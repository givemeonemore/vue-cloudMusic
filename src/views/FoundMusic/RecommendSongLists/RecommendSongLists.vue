<template>
  <div class="song-lists">
    <div class="song-lists-body" v-for="(item, key) in initRecommendSongLists" :key="key">
      <single-recommend-song-list :songListDataProp="item"></single-recommend-song-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SingleRecommendSongList from "./SingleRecommendSongList.vue";
@Component({
  components: {
    SingleRecommendSongList
  }
})
export default class RecommendSongLists extends Vue {
  songListData: string = "";
  initRecommendSongLists: Array<object> = [
    {
      "songListName": "每日歌曲推荐",
      "isEveryday": true,
      "songListId": 1,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "根据你的音乐口味生成，每天6:00更新",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 2,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 3,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 4,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 5,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 6,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 7,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 8,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 9,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    },
    {
      "songListName": "华语速爆新歌",
      "songListId": 9,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": "false"
    }
  ]
}
</script>

<style scoped lang="less">
.song-lists {
  width: 100%;
  height: 100%;
  &-body {
    width: 200px;
    height: 200px;
    display: inline-block;
    position: relative;
  }
}
</style>
