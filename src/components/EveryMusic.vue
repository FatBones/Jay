<template>
  <div>
    <div
      class="MusicBar"
      ref="MusicBar"
      :class="isAudioReady ? 'showButtons' : ''"
    >
      <p
        class="MusicName"
        ref="MusicName"
        :class="isAudioReady ? 'readyMusic' : ''"
      >
        {{ music.name }}
      </p>
      <img class="onplaying" ref="onplaying" src="../assets/img/playing.png" />
      <audio
        class="audio"
        ref="audio"
        hidden="hidden"
        controls="controls"
        @ended="endFun()"
        @timeupdate="updateFun()"
        :src="audioSrc"
      ></audio>
      <span class="uploadMusic" v-if="!isAudioReady">
        <MusicUploader :album="this.music.url"/>
      </span>
      <span class="Group" ref="Group">
        <a class="begin" href="javascript:;"
          ><img
            class="zanTing"
            ref="zanTing"
            :src="zanTingSrc"
            @click="isAudioReady ? clickFun() : ''"
        /></a>
        <a class="admire" href="javascript:;"
          ><img class="dianZan" src="../assets/img/点赞.png"
        /></a>
        <a class="keep" href="javascript:;"
          ><img
            class="xiaZai"
            src="../assets/img/收藏.png"
            @click="keep(music.name, albumName)"
        /></a>
      </span>
      <!-- <span v-else class="Group" style="opacity: 1;">
        <a class="uploadMusic" href="javascript:;"
          ><img class="shangChuan" src="../assets/img/uploadMusic.png"
        /></a>
      </span> -->
    </div>
  </div>
</template>

<script>
import { addSong } from "../api/index";
import { Message } from "element-ui";
import MusicUploader from "./MusicUploader";

let audio = document.getElementsByClassName("audio");
let zanTing = document.getElementsByClassName("zanTing");
let getId;
export default {
  name: "EveryMusic",
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!动态指定url！！！！！！！！！！！！！！！！！！！！！！！！！！
  data() {
    return {
      audioSrc: "D:\\A_own_code\\Jay\\static" + this.music.url + this.music.audio,
      zanTingSrc: require("../assets/img/播放.png"),
      musicIndex: this.music.id,
      isAudioReady: this.music.isAudioReady,
    };
  },
  props: ["music", "len", "allMusic", "albumName"],
  components: { MusicUploader },
  mounted() {
    this.$nextTick(function () {
      //思考一下怎么放在其他地方只触发一次
      this.$bus.$emit("getParams", audio, zanTing, this.allMusic);
    });
    this.$bus.$on("updateGetId", (Id) => {
      getId = Id;
    });
    this.$bus.$on("showOnplaying", (getId) => {
      const onplayingElements = document.getElementsByClassName("onplaying");
      for (let j = 0; j < audio.length; j++) {
        if (j === getId) {
          onplayingElements[j].style.opacity = "1";
          continue;
        }
        onplayingElements[j].style.opacity = "0";
      }
    });
    this.$bus.$on("changeIsAudioReady", (symbol) => {
      this.isAudioReady = symbol;
    });
    this.judge();
  },
  beforeDestroy() {
    this.$bus.$off(["updateGetId", "showOnplaying", "changeIsAudioReady"]);
  },
  methods: {
    // 歌曲数量自适应
    judge() {
      if (parseInt(this.len) === 11) {
        this.$refs.MusicBar.style.height = "35px";
        this.$refs.Group.style.bottom = "33px";
      } else if (parseInt(this.len) === 12) {
        this.$refs.MusicBar.style.height = "32px";
        this.$refs.Group.style.bottom = "33px";
      }
    },
    //点击播放键
    clickFun() {
      getId = parseInt(this.music.id) - 1;
      this.playFun();
      this.updateFun();
    },
    //播放
    playFun() {
      let bo = true;
      if (bo) {
        console.log(1);
      } else {
        console.log(2);
      }

      if (audio[getId].paused) {
        zanTing[getId].src = require("../assets/img/暂停.png");
        this.$bus.$emit("changeIcon", true);
        //后期换个动画承载，这个就当返回首页
        this.$bus.$emit("ratate", true);
        const onplayingElements = document.getElementsByClassName("onplaying");
        //暂停其他歌
        for (let j = 0; j < audio.length; j++) {
          if (j === getId) {
            onplayingElements[j].style.opacity = "1";
            continue;
          }
          if (audio[j].played) {
            audio[j].load();
            zanTing[j].src = require("../assets/img/播放.png");
          }
          onplayingElements[j].style.opacity = "0";
        }
        audio[getId].play();
        this.$bus.$emit("showWord", this.allMusic[getId].name);
        this.$bus.$emit("runningMusic", audio[getId], getId);
        this.$bus.$emit("useInnerEndFun");
      } else {
        audio[getId].pause();
        zanTing[getId].src = require("../assets/img/播放.png");
        this.$bus.$emit("changeIcon", false);
        this.$bus.$emit("ratate", false);
      }
    },
    //当播放完毕时，自动播放下一首
    endFun() {
      getId++;
      if (getId > audio.length - 1) getId = 0;
      this.playFun();
    },
    //随音乐更改进度条
    updateFun() {
      this.$bus.$emit("updateFun");
    },
    // 收藏音乐
    async keep(name, albumName) {
      let songSrc = this.music.url;
      let params = new URLSearchParams();
      params.append("name", name);
      params.append("songSrc", songSrc);
      params.append("albumName", albumName);
      let result = await addSong(params);
      if (result.statusbar === 0)
        Message.success({
          message: "添加成功",
          center: true,
          duration: 1000,
        });
      else if (result.statusbar === 1)
        Message.warning({
          message: "已添加",
          center: true,
          duration: 1000,
        });
    },
  },
};
</script>

<style scoped>
@keyframes swing {
  50% {
    transform: rotate(-50deg);
  }
}
.onplaying {
  width: 20px;
  height: 20px;
  position: relative;
  top: -35px;
  left: 200px;
  opacity: 0;
  transform: rotate(10deg);
  transition: 0.1s ease;
  animation: swing 3s linear infinite;
}
.zanting,
.dianzan,
.xiazai,
.shangChuan {
  user-select: none;
}
</style>
