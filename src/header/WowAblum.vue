<template>
  <PageBuilder
    :color="'linear-gradient(to right, #993480, #a94e8a, #b76695, #c57ea2, #d196b0);'"
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
        { id: "01", name: "惊叹号", url: "/惊叹号", audio: "/惊叹号.mp3" },
        { id: "02", name: "迷魂曲", url: "/惊叹号", audio: "/迷魂曲.mp3" },
        {
          id: "03",
          name: "Mine Mine",
          url: "/惊叹号",
          audio: "/Mine Mine.mp3",
        },
        { id: "04", name: "公主病", url: "/惊叹号", audio: "/公主病.mp3" },
        { id: "05", name: "你好吗", url: "/惊叹号", audio: "/你好吗.mp3" },
        {
          id: "06",
          name: "疗伤烧肉粽",
          url: "/惊叹号",
          audio: "/疗伤烧肉粽.mp3",
        },
        { id: "07", name: "琴伤", url: "/惊叹号", audio: "/琴伤.mp3" },
        {
          id: "08",
          name: "水手怕水",
          url: "/惊叹号",
          audio: "/水手怕水.mp3",
        },
        {
          id: "09",
          name: "世界未末日",
          url: "/惊叹号",
          audio: "/世界未末日.mp3",
        },
        { id: "10", name: "皮影戏", url: "/惊叹号", audio: "/皮影戏.mp3" },
        {
          id: "11",
          name: "超跑女神",
          url: "/惊叹号",
          audio: "/超跑女神.mp3",
        },
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
