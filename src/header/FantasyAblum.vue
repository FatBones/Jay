<template>
  <PageBuilder
    :color="'linear-gradient(to right, #cd4242, #cc4243, #cc4145, #cb4146, #ca4147);'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "FantasyAblum",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "范特西",
      allMusic: [
        { id: "01", name: "爱在西元前", url: "/范特西",audio:"/爱在西元前.mp3" },
        { id: "02", name: "爸，我回来了", url: "/范特西",audio:"/爸，我回来了.mp3" },
        { id: "03", name: "简单爱", url: "/范特西",audio:"/简单爱.mp3" },
        { id: "04", name: "忍者", url: "/范特西",audio:"/忍者.mp3" },
        { id: "05", name: "开不了口", url: "/范特西",audio:"/开不了口.mp3" },
        { id: "06", name: "上海一九四三", url: "/范特西",audio:"/上海一九四三.mp3" },
        { id: "07", name: "对不起", url: "/范特西",audio:"/sorry.mp3" },
        { id: "08", name: "威廉古堡", url: "/范特西",audio:"/威廉古堡.mp3" },
        { id: "09", name: "双截棍", url: "/范特西",audio:"/双截棍.mp3" },
        { id: "10", name: "安静", url: "/范特西",audio:"/安静.mp3" },
      ],
      imgUrl: require("../assets/album/范特西.jpg"),
      len: "10",
    };
  },
  methods: {},
};
</script>

<style snoped>
* {
  margin: 0;
  padding: 0;
}
</style>
