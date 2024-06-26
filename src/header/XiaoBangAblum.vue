<template>
  <PageBuilder
    :color="'linear-gradient(to right, #392b1a, #44321d, #4f381f, #5a3f22, #664625);'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "XiaoBangAblum",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "十一月的肖邦",
      allMusic: [
        { id: "01", name: "夜曲", url: "/6.11月的肖邦", audio: "/夜曲.mp3" },
        {
          id: "02",
          name: "蓝色风暴",
          url: "/6.11月的肖邦",
          audio: "/蓝色风暴.mp3",
        },
        {
          id: "03",
          name: "发如雪",
          url: "/6.11月的肖邦",
          audio: "/发如雪.mp3",
        },
        {
          id: "04",
          name: "黑色毛衣",
          url: "/6.11月的肖邦",
          audio: "/黑色毛衣.mp3",
        },
        {
          id: "05",
          name: "四面楚歌",
          url: "/6.11月的肖邦",
          audio: "/四面楚歌.mp3",
        },
        { id: "06", name: "枫", url: "/6.11月的肖邦", audio: "/枫.mp3" },
        {
          id: "07",
          name: "浪漫手机",
          url: "/6.11月的肖邦",
          audio: "/浪漫手机.mp3",
        },
        { id: "08", name: "逆鳞", url: "/6.11月的肖邦", audio: "/逆鳞.mp3" },
        {
          id: "09",
          name: "麦芽糖",
          url: "/6.11月的肖邦",
          audio: "/麦芽糖.mp3",
        },
        {
          id: "10",
          name: "珊瑚海",
          url: "/6.11月的肖邦",
          audio: "/珊瑚海.mp3",
        },
        {
          id: "11",
          name: "漂移",
          url: "/6.11月的肖邦",
          audio: "/漂移.mp3",
        },
        {
          id: "12",
          name: "一路向北",
          url: "/6.11月的肖邦",
          audio: "/一路向北.mp3",
        },
      ],
      imgUrl: require("../assets/album/11月的肖邦.jpg"),
      len: "12",
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
