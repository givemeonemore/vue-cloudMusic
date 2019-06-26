<template>
  <div class="song-lists">
    <div class="song-lists-body">
      <div class="song-lists-body-item" v-for="(item, key) in initFristPageRecommendSongLists" :key="item.songListId">
        <single-recommend-song-list :songListDataProp="item" ></single-recommend-song-list>
      </div>
    </div>
    <div class="song-lists-body">
      <div class="song-lists-body-item" v-for="(item, key) in initSecondPageRecommendSongLists" :key="item.songListId">
        <single-recommend-song-list :songListDataProp="item" ></single-recommend-song-list>
      </div>
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
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
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
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
      "songListId": 10,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
      "songListId": 11,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
      "songListId": 12,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": false
    },
    {
      "songListName": "华语速爆新歌",
      "bgImg": "./static/img/suolong.png",
      "songListId": 13,
      "songListImg": "",
      "createUserName": "zhouran",
      "createTime": "2019-05-14",
      "songNum": 20,
      "songListBroadcastNum": 9836521484,
      "songListCollectNum": 56481236,
      "songListShareNum": 6543121,
      "songListTip": ["华语","流行"],
      "songListProfile": "优质华语新歌，网易云&台湾KKBOX联合推荐！没周二精选推荐。",
      "isVip": false
    }
  ]

  get initFristPageRecommendSongLists() {
    if (this.initRecommendSongLists.length > 0) {
      return this.initRecommendSongLists.slice(0, 5);
    }
  }

  get initSecondPageRecommendSongLists() {
    if (this.initRecommendSongLists.length > 0) {
      return this.initRecommendSongLists.slice(5, 10);
    }
  }
}
</script>

<style scoped lang="less">
.song-lists {
  height: 500px;
  &-body {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    &-item {
      width: 200px;
      height: 220px;
      display: inline-block;
      position: relative;
    }
  }
}
</style>
