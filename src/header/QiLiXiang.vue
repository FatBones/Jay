<template>
  <PageBuilder
    :color="'linear-gradient(to right, #4d7b38, rgba(145,165,15,0.84)'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "QiLiXiang",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "七里香",
      allMusic: [
        { id: "01", name: "我的地盘", url: "/5.七里香/我的地盘.mp3" },
        { id: "02", name: "七里香", url: "/5.七里香/七里香.mp3" },
        { id: "03", name: "借口", url: "/5.七里香/借口.mp3" },
        { id: "04", name: "外婆", url: "/5.七里香/外婆.mp3" },
        { id: "05", name: "将军", url: "/5.七里香/将军.mp3" },
        { id: "06", name: "搁浅", url: "/5.七里香/搁浅.mp3" },
        { id: "07", name: "乱舞春秋", url: "/5.七里香/乱舞春秋.mp3" },
        { id: "08", name: "困兽之斗", url: "/5.七里香/困兽之斗.mp3" },
        { id: "09", name: "园游会", url: "/5.七里香/园游会.mp3" },
        { id: "10", name: "止战之殇", url: "/5.七里香/止战之殇.mp3" },
      ],
      imgUrl: require("../assets/album/七里香.jpg"),
      len: "10",
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
