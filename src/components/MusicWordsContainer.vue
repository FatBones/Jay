<template>
  <div class="container" ref="container">
    <div class="TitleContainer">
      <p class="MusicTitle">{{ musicName }}</p>
    </div>
    <div class="MusicWordsContainer">
      <div class="lrc" ref="lrc">
        <p
          class="MusicWords"
          :class="{
            active:
              parseInt(time) >= keyArr[index] &&
              parseInt(time) < (keyArr[index + 1] || 1000),
          }"
          v-for="(item, key, index) in lrcData"
          :key="index"
        >
          {{ item }}
          {{ srcollrc(key, index) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { downloadWord } from "@/api/upload";
export default {
  name: "MusicWordsContainer",
  props: ["albumName"],
  data() {
    return {
      musicName: "",
      lrcData: {},
      keyArr: [],
      time: "",
    };
  },
  mounted() {
    this.$bus.$on("showWord", this.getWords);

    this.$bus.$on("getTime", (time) => {
      this.time = time;
    });
  },
  beforeDestroy() {
    this.$bus.$off(["showWord", "getTime"]);
  },
  watch: {
    keyArr() {
      this.$refs.container.style.opacity = "1";
    },
  },
  methods: {
    async getWords(musicName) {
      this.musicName = musicName;
      let num = 0;
      let musicNameArr = ["夜曲", "斗牛", "我的地盘", "彩虹", "借口", "你好吗"];
      if (musicNameArr.includes(musicName)) num = 1;
      else if (musicName == "简单爱" || musicName == "说走就走") num = 2;
      else if (musicName == "对不起") num = 3;
      //重载歌词
      this.keyArr = [];
      let port = window.location.port;
      let useUrl = `http://localhost:${port}/api/MIGUM3.0/v1.0/content/search_all.do?&ua=Android_migu&version=5.0.1&text=${this.musicName}&pageNo=1&pageSize=10&searchSwitch={"song":1,"album":0,"singer":0,"tagSong":0,"mvSong":0,"songlist":0,"bestShow":1}`;
      let result = await axios.get(useUrl);
      // console.log("🚀 ~ getWords ~ result:", result);
      let lyricUrl = result.data.songResultData.result[num].lyricUrl;
      lyricUrl = lyricUrl.replace(
        "https://d.musicapp.migu.cn",
        `http://localhost:${port}/word`
      );
      lyricUrl = lyricUrl.replace(
        "http://d.musicapp.migu.cn",
        `http://localhost:${port}/word`
      );
      let res = await axios.get(lyricUrl);
      console.log("🚀 ~ getWords ~ res:", res)
      await downloadWord(res.data, this.albumName + "/" + this.musicName);
      let lyrics = res.data.split("\n");
      let lrcObj = {};
      for (let i = 0; i < lyrics.length; i++) {
        let lyric = decodeURIComponent(lyrics[i]);
        let timeReg = /\[\d*:\d*((\.|:)\d*)*\]/g;
        let timeReExpArr = lyric.match(timeReg);
        if (!timeReExpArr) continue;
        let clause = lyric.replace(timeReg, "");
        for (let k = 0, h = timeReExpArr.length; k < h; k++) {
          let t = timeReExpArr[k];
          let min = Number(String(t.match(/\[\d*/i)).slice(1)),
            sec = Number(String(t.match(/:\d*/i)).slice(1));
          let time = min * 60 + sec;
          lrcObj[time] = clause;
        }
      }
      this.lrcData = lrcObj;
      for (let i in this.lrcData) {
        this.keyArr.push(i);
      }
    },
    srcollrc(key, index) {
      const lrcDiv = this.$refs.lrc;
      if (
        key < this.time &&
        key > this.time - (this.keyArr[index + 1] - this.keyArr[index])
      ) {
        lrcDiv.style.top = -((index - 2) * 30) + "px";
      }
    },
  },
};
</script>

<style scoped>
p {
  position: relative;
}
.container {
  width: 300px;
  height: 500px;
  position: absolute;
  right: 5vw;
  top: 50vh;
  transform: translate(0, -50%);
  opacity: 0;
  transition: 1s;
}
.TitleContainer {
  position: absolute;
  text-align: center;
  width: 300px;
}
.MusicWordsContainer {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: absolute;
  top: 100px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.MusicTitle {
  user-select: none;
  font-size: 20px;
  text-align: center;
  top: 60px;
  font-family: "迷你简卡通";
}
.MusicWords {
  user-select: none;
  text-align: center;
  top: 50px;
  font-family: "也字工厂果酱体";
  height: 30px;
  line-height: 50px;
  opacity: 0.7;
}

.lrc {
  width: 300px;
  height: 150px;
  position: absolute;
  top: 0;
  transition: top 0.5s;
}
.active {
  color: rgb(255, 255, 255) !important;
  font-size: 18px;
  opacity: 1;
}

.up30 {
  margin-top: -30px;
}
</style>