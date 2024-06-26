<template>
  <div>
    <MusicTitle :musicTitle="musicTitle" />
    <GroupOfMusic :allMusic="allMusicWithSymbol" :albumName="newMusicTitle" />
    <AlbumImg :imgUrl="imgUrl" />
    <MusicPlayer />
    <MusicWordsContainer :albumName="newMusicTitle"/>
  </div>
</template>

<script>
import GroupOfMusic from "../components/GroupOfMusic.vue";
import AlbumImg from "../components/AlbumImg.vue";
import MusicTitle from "../components/MusicTitle.vue";
import MusicPlayer from "../components/MusicPlayer.vue";
import MusicWordsContainer from "../components/MusicWordsContainer.vue";

export default {
  name: "PageBuilder",
  props: ["color", "musicTitle", "allMusic", "imgUrl", "len"],
  components: {
    GroupOfMusic,
    AlbumImg,
    MusicTitle,
    MusicPlayer,
    MusicWordsContainer,
  },
  data() {
    return {
      newColor: this.color,
      newMusicTitle: this.musicTitle,
      newAllMusic: this.allMusic,
      allMusicWithSymbol: void 0,
      newLen: this.len,
    };
  },
  beforeMount() {
    document.getElementById('allOfThose').setAttribute("style", `background:${this.newColor}`);
  },
  mounted() {
    this.isAudioExits();
  },
  methods: {
    isAudioExits() {
      for (const item of this.newAllMusic) {
        try {
          require("../../static" + item.url + item.audio);
          this.$set(item, 'isAudioReady', true)
        } catch {
          this.$set(item, 'isAudioReady', false)
        }
      }
      this.allMusicWithSymbol = this.newAllMusic
    },
  },
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
