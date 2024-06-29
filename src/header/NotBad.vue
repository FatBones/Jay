<template>
  <PageBuilder
    :color="'linear-gradient(to right, #c7c2ca, #cac2cf, #cec1d3, #d1c1d7, #d5c0db)'"
    :musicTitle="musicTitle"
    :allMusic="allMusic"
    :imgUrl="imgUrl"
    :len="len"
  />
</template>

<script>
import PageBuilder from "@/hook/pageBuilder.vue";
export default {
  name: "NotBad",
  components: { PageBuilder },
  data() {
    return {
      musicTitle: "哎哟，不错哦",
      allMusic: [
        {
          id: "01",
          name: "阳明山",
          url: "/哎哟，不错哦",
          audio: "/阳明山.mp3",
        },
        { id: "02", name: "窃爱", url: "/哎哟，不错哦", audio: "/窃爱.mp3" },
        {
          id: "03",
          name: "算什么男人",
          url: "/哎哟，不错哦",
          audio: "/算什么男人.mp3",
        },
        {
          id: "04",
          name: "天涯过客",
          url: "/哎哟，不错哦",
          audio: "/天涯过客.mp3",
        },
        {
          id: "05",
          name: "怎么了",
          url: "/哎哟，不错哦",
          audio: "/怎么了.mp3",
        },
        {
          id: "06",
          name: "一口气全念对",
          url: "/哎哟，不错哦",
          audio: "/一口气全念对.mp3",
        },
        {
          id: "07",
          name: "我要夏天",
          url: "/哎哟，不错哦",
          audio: "/我要夏天.mp3",
        },
        {
          id: "08",
          name: "我要夏天",
          url: "/哎哟，不错哦",
          audio: "/我要夏天.mp3",
        },
        {
          id: "09",
          name: "手写的从前",
          url: "/哎哟，不错哦",
          audio: "/手写的从前.mp3",
        },
        {
          id: "10",
          name: "鞋子特大号",
          url: "/哎哟，不错哦",
          audio: "/鞋子特大号.mp3",
        },
        {
          id: "11",
          name: "美人鱼",
          url: "/哎哟，不错哦",
          audio: "/美人鱼.mp3",
        },
        {
          id: "12",
          name: "听见下雨的声音",
          url: "/哎哟，不错哦",
          audio: "/听见下雨的声音.mp3",
        },
      ],
      imgUrl: require("../assets/album/哎哟，不错哦.jpg"),
      len: 12,
    };
  },
};
</script>


<style snoped>
* {
  margin: 0;
  padding: 0;
}
</style>
