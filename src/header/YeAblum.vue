<template>
  <PageBuilder
    :color="'linear-gradient(to right, #053f38, #184b39, #2d5637, #456134, #5f6a32);'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "YeAblum",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "叶惠美",
      allMusic: [
        {
          id: "01",
          name: "以父之名",
          url: "/叶惠美",
          audio: "/以父之名.mp3",
        },
        { id: "02", name: "懦夫", url: "/叶惠美", audio: "/懦夫.mp3" },
        { id: "03", name: "晴天", url: "/叶惠美", audio: "/晴天.mp3" },
        {
          id: "04",
          name: "三年二班",
          url: "/叶惠美",
          audio: "/三年二班.mp3",
        },
        { id: "05", name: "东风破", url: "/叶惠美", audio: "/东风破.mp3" },
        {
          id: "06",
          name: "你听得到",
          url: "/叶惠美",
          audio: "/你听得到.mp3",
        },
        {
          id: "07",
          name: "同一种调调",
          url: "/叶惠美",
          audio: "/同一种调调.mp3",
        },
        {
          id: "08",
          name: "她的睫毛",
          url: "/叶惠美",
          audio: "/她的睫毛.mp3",
        },
        {
          id: "09",
          name: "爱情悬崖",
          url: "/叶惠美",
          audio: "/爱情悬崖.mp3",
        },
        { id: "10", name: "梯田", url: "/叶惠美", audio: "/梯田.mp3" },
        { id: "11", name: "双刀", url: "/叶惠美", audio: "/双刀.mp3" },
      ],
      imgUrl: require("../assets/album/叶惠美.jpg"),
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
