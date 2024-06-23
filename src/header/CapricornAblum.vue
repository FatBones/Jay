<template>
  <PageBuilder
    :color="'linear-gradient(to right, #5d2902, #844c0c, #a97417, #c99f24, #e5cd37)'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "CapricornAblum",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "魔杰座",
      allMusic: [
        { id: "01", name: "龙战骑士", url: "/9.魔杰座/龙战骑士.mp3" },
        {
          id: "02",
          name: "给我一首歌的时间",
          url: "/9.魔杰座/给我一首歌的时间.mp3",
        },
        { id: "03", name: "蛇舞", url: "/9.魔杰座/蛇舞.mp3" },
        { id: "04", name: "花海", url: "/9.魔杰座/花海.mp3" },
        { id: "05", name: "魔术先生", url: "/9.魔杰座/魔术先生.mp3" },
        { id: "06", name: "说好的幸福呢", url: "/9.魔杰座/说好的幸福呢.mp3" },
        { id: "07", name: "兰亭序", url: "/9.魔杰座/兰亭序.mp3" },
        { id: "08", name: "流浪诗人", url: "/9.魔杰座/流浪诗人.mp3" },
        { id: "09", name: "时光机", url: "/9.魔杰座/时光机.mp3" },
        { id: "10", name: "乔克叔叔", url: "/9.魔杰座/乔克叔叔.mp3" },
        { id: "11", name: "稻香", url: "/9.魔杰座/稻香.mp3" },
      ],
      imgUrl: require("../assets/album/魔杰座.jpg"),
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
