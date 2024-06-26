<template>
  <PageBuilder
    :color="'linear-gradient(to right, rgba(210,160,138), rgba(238,231,165)'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "JayAblum",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "Jay",
      allMusic: [
        { id: "01", name: "可爱女人", url: "/1.Jay", audio: "/可爱女人.mp3" },
        { id: "02", name: "完美主义", url: "/1.Jay", audio: "/完美主义.mp3" },
        { id: "03", name: "星晴", url: "/1.Jay", audio: "/星晴.mp3" },
        { id: "04", name: "娘子", url: "/1.Jay", audio: "/娘子.mp3" },
        { id: "05", name: "斗牛", url: "/1.Jay", audio: "/斗牛.mp3" },
        { id: "06", name: "黑色幽默", url: "/1.Jay", audio: "/黑色幽默.mp3" },
        { id: "07", name: "伊斯坦堡", url: "/1.Jay", audio: "/伊斯坦堡.mp3" },
        {
          id: "08",
          name: "印第安老斑鸠",
          url: "/1.Jay",
          audio: "/印第安老斑鸠.mp3",
        },
        { id: "09", name: "龙卷风", url: "/1.Jay", audio: "/龙卷风.mp3" },
        {
          id: "10",
          name: "反方向的钟",
          url: "/1.Jay",
          audio: "/反方向的钟.mp3",
        },
      ],
      imgUrl: require("../assets/album/Jay.jpg"),
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
