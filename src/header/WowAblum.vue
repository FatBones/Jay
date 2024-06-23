<template>
  <PageBuilder
    :color="'linear-gradient(to right, #790a78, #85348a, #91509c, #9e6aac, #ab83bc)'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "WowAblum",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "惊叹号",
      allMusic: [
        { id: "01", name: "惊叹号", url: "/11.惊叹号/惊叹号.mp3" },
        { id: "02", name: "迷魂曲", url: "/11.惊叹号/迷魂曲.mp3" },
        { id: "03", name: "Mine Mine", url: "/11.惊叹号/Mine Mine.mp3" },
        { id: "04", name: "公主病", url: "/11.惊叹号/公主病.mp3" },
        { id: "05", name: "你好吗", url: "/11.惊叹号/你好吗.mp3" },
        { id: "06", name: "疗伤烧肉粽", url: "/11.惊叹号/疗伤烧肉粽.mp3" },
        { id: "07", name: "琴伤", url: "/11.惊叹号/琴伤.mp3" },
        { id: "08", name: "水手怕水", url: "/11.惊叹号/水手怕水.mp3" },
        { id: "09", name: "世界未末日", url: "/11.惊叹号/世界未末日.mp3" },
        { id: "10", name: "皮影戏", url: "/11.惊叹号/皮影戏.mp3" },
        { id: "11", name: "超跑女神", url: "/11.惊叹号/超跑女神.mp3" },
      ],
      imgUrl: require("../assets/album/惊叹号.jpg"),
      len: "11",
    };
  },
  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.MusicBar {
  width: 500px;
  height: 35px;
}
.Group {
  bottom: 33px;
}
</style>
