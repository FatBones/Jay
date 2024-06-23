<template>
  <PageBuilder
    :color="'linear-gradient(to right, #1d9d95, #2d8e7c, #367e65, #3a6f51, #3c603f, #445b38, #4a5634, #4e5131, #5a5439, #645742, #6b5b4c, #706057);'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "最伟大的作品",
      allMusic: [
        {
          id: "01",
          name: "intro",
          url: "/15.masterpiece/intro.mp3",
        },
        {
          id: "02",
          name: "最伟大的作品",
          url: "/15.masterpiece/最伟大的作品.mp3",
        },
        { id: "03", name: "还在流浪", url: "/15.masterpiece/还在流浪.mp3" },
        {
          id: "04",
          name: "说好不哭",
          url: "/15.masterpiece/说好不哭.mp3",
        },
        { id: "05", name: "红颜如霜", url: "/15.masterpiece/红颜如霜.mp3" },
        {
          id: "06",
          name: "不爱我就拉倒",
          url: "/15.masterpiece/不爱我就拉倒.mp3",
        },
        {
          id: "07",
          name: "Mojito",
          url: "/15.masterpiece/Mojito.mp3",
        },
        {
          id: "08",
          name: "错过的烟火",
          url: "/15.masterpiece/错过的烟火.mp3",
        },
        {
          id: "09",
          name: "等你下课",
          url: "/15.masterpiece/等你下课.mp3",
        },
        {
          id: "10",
          name: "粉色海洋",
          url: "/15.masterpiece/粉色海洋.mp3",
        },
        {
          id: "11",
          name: "倒影",
          url: "/15.masterpiece/倒影.mp3",
        },
        {
          id: "12",
          name: "我是如此相信",
          url: "/15.masterpiece/我是如此相信.mp3",
        },
      ],
      imgUrl: require("../assets/album/masterpiece.jpg"),
      len: "12",
    };
  },
};
</script>

<style scoped>
</style>