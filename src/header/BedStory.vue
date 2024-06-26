<template>
  <PageBuilder
    :color="'linear-gradient(to right, #57352c, #714439, #8b5446, #a76553, #c37661);'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "BedStory",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "周杰伦的床边故事",
      allMusic: [
        {
          id: "01",
          name: "床边故事",
          url: "/14.周杰伦的床边故事",
          audio: "/床边故事.mp3",
        },
        {
          id: "02",
          name: "说走就走",
          url: "/14.周杰伦的床边故事",
          audio: "/说走就走.mp3",
        },
        {
          id: "03",
          name: "一点点",
          url: "/14.周杰伦的床边故事",
          audio: "/一点点.mp3",
        },
        {
          id: "04",
          name: "前世情人",
          url: "/14.周杰伦的床边故事",
          audio: "/前世情人.mp3",
        },
        {
          id: "05",
          name: "英雄",
          url: "/14.周杰伦的床边故事",
          audio: "/英雄.mp3",
        },
        {
          id: "06",
          name: "不该",
          url: "/14.周杰伦的床边故事",
          audio: "/不该.mp3",
        },
        {
          id: "07",
          name: "土耳其冰淇淋",
          url: "/14.周杰伦的床边故事",
          audio: "/土耳其冰淇淋.mp3",
        },
        {
          id: "08",
          name: "告白气球",
          url: "/14.周杰伦的床边故事",
          audio: "/告白气球.mp3",
        },
        {
          id: "09",
          name: "Now You See Me",
          url: "/14.周杰伦的床边故事",
          audio: "/Now You See Me.mp3",
        },
        {
          id: "10",
          name: "爱情废材",
          url: "/14.周杰伦的床边故事",
          audio: "/爱情废材.mp3",
        },
      ],
      imgUrl: require("../assets/album/周杰伦的床边故事.jpg"),
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
</style>
