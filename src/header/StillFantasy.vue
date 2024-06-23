<template>
  <PageBuilder
    :color="'linear-gradient(to right,#232020, rgba(75,74,74,0.81)'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "StillFantasy",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "依然范特西",
      allMusic: [
        { id: "01", name: "夜的第七章", url: "/7.依然范特西/夜的第七章.mp3" },
        { id: "02", name: "听妈妈的话", url: "/7.依然范特西/听妈妈的话.mp3" },
        { id: "03", name: "千里之外", url: "/7.依然范特西/千里之外.mp3" },
        { id: "04", name: "本草纲目", url: "/7.依然范特西/本草纲目.mp3" },
        { id: "05", name: "退后", url: "/7.依然范特西/退后.mp3" },
        { id: "06", name: "红模仿", url: "/7.依然范特西/红模仿.mp3" },
        { id: "07", name: "心雨", url: "/7.依然范特西/心雨.mp3" },
        { id: "08", name: "白色风车", url: "/7.依然范特西/白色风车.mp3" },
        { id: "09", name: "迷迭香", url: "/7.依然范特西/迷迭香.mp3" },
        { id: "10", name: "菊花台", url: "/7.依然范特西/菊花台.mp3" },
      ],
      imgUrl: require("../assets/album/依然范特西.jpg"),
      len: "10",
    };
  },
  methods: {},
};
</script>

<style snope>
* {
  margin: 0;
  padding: 0;
}
</style>
