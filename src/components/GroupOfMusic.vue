<template>
  <!--歌栏-->
  <div id="GroupOfMusic">
    <span class="uploadMusic">
      <MusicUploader :album="albumName"/>
    </span>
    <EveryMusic
      v-for="music in allMusic"
      :key="music.id"
      :music="music"
      :allMusic="allMusic"
      :len="allMusic.length"
      :albumName="albumName"
    />
  </div>
</template>

<script>
import EveryMusic from "./EveryMusic.vue";
import MusicUploader from "./MusicUploader";

export default {
  name: "GroupOfMusic",
  components: { EveryMusic, MusicUploader },
  props: ["allMusic", "albumName"],
  methods: {},
  beforeMount() {},
};
</script>

<style>
#GroupOfMusic {
  position: absolute;
  margin-top: 40vh;
  margin-left: 50vw;
  transform: translate(-50%, -60%);
  width: 600px;
  height: 520px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  transition: 0.5s;
}

.MusicName {
  display: block;
  user-select: none;
  line-height: 40px;
  font-family: "也字工厂果酱体";
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  width: 500px;
  border: 2px rgba(255, 255, 255, 0.2);
  border-radius: 1px;
  border-bottom-style: dashed;
  text-decoration: line-through;
}
.readyMusic {
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
}
.MusicBar {
  width: 500px;
  height: 40px;
  border-radius: 20px;
  margin: 10px auto;
  cursor: default;
}
.Group {
  position: relative;
  bottom: 35px;
  left: 430px;
  opacity: 0;
  transition: opacity 0.6s;
}
.showButtons:hover .Group {
  opacity: 1;
}
.begin {
  position: absolute;
  right: 70px;
}
.keep {
  position: absolute;
  right: 10px;
}
.uploadMusic {
  position: absolute;
  left: 287.5px;
  top: -50px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 15px rgb(255 255 255 / 30%);
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.admire {
  position: absolute;
  right: -50px;
}
#leadingSong {
  position: absolute;
  right: 453px;
}

.zanTing,
.dianZan,
.xiaZai,
.shangChuan {
  width: 20px;
  height: 20px;
  border-radius: 7px;
}
</style>