<template>
  <div class="MusicPlayer" ref="MusicPlayer">
    <div class="progressGroup">
      <div class="beginPlace" ref="beginPlace"></div>
      <div
        class="progressContainer"
        ref="progressContainer"
        @click.stop="setPlaceFun($event)"
      >
        <div class="progress" ref="progress">
          <div
            class="contact showContact"
            @mousedown="slipPlaceFun($event)"
          ></div>
        </div>
      </div>
      <div class="endPlace" ref="endPlace"></div>
    </div>
    <span id="controll-bottom">
      <a id="Last" href="javascript:void(0);"
        ><img
          id="shangYiShou"
          src="../assets/img/上一首.png"
          @click="lastFun()"
      /></a>
      <a id="BigBegin" href="javascript:void(0);"
        ><img class="daBoFang" ref="daBoFang" :src="BigIcon" @click="holdFun()"
      /></a>
      <a id="Next" href="javascript:void(0);"
        ><img id="xiaYiShou" src="../assets/img/下一首.png" @click="nextFun()"
      /></a>
      <span
        id="volumeGroup"
        ref="volumeGroup"
        @mouseout="hiddenVolumeFun()"
        @mouseover="showVolumeFun()"
      >
        <a id="volume">
          <img
            class="yinLiang"
            ref="yinLiang"
            src="../assets/img/声音.png"
            @click="muteOrNotFun()"
          />
          <div
            class="volumeContainer"
            ref="volumeContainer"
            @click="setVolumeFun($event)"
          >
            <div class="volumeLength" ref="volumeLength">
              <div
                class="contact"
                ref="contact"
                @mousedown="slipVolumeFun($event)"
              ></div>
            </div>
          </div>
        </a>
      </span>
    </span>
  </div>
</template>

<script>
let v;
export default {
  name: "MusicPlayer",
  data() {
    return {
      BigIcon: "",
      runningMusic: "",
      allMusic: "",
      allAudios: "",
      allIcon: "",
      getId: "",
      mouseX: void 0,
      mouseDown: false,
    };
  },
  mounted() {
    this.$bus.$on("getParams", (allAudios, allIcon, allMusic) => {
      this.allAudios = allAudios;
      this.allIcon = allIcon;
      this.allMusic = allMusic;
    }),
      this.$bus.$on("runningMusic", (params, params1) => {
        this.runningMusic = params;
        this.getId = params1;
      }),
      this.$bus.$on("changeIcon", (isRunning) => {
        if (isRunning) this.BigIcon = require("../assets/img/Big暂停.png");
        else this.BigIcon = require("../assets/img/Big播放.png");
      }),
      this.$bus.$on("useInnerEndFun", this.useInnerEndFun),
      this.$bus.$on("updateFun", this.updateFun);
  },
  beforeDestroy() {
    this.$bus.$off([
      "getParams",
      "runningMusic",
      "changeIcon",
      "showMusicPlayer",
      "useInnerEndFun",
      "updateFun",
    ]);
  },
  watch: {
    runningMusic: function () {
      if (this.runningMusic !== "") {
        this.$refs.MusicPlayer.style.display = "block";
      }
    },
  },
  methods: {
    //显示音量
    showVolumeFun() {
      this.$refs.volumeContainer.style.display = "inline";
    },
    //不显示音量
    hiddenVolumeFun() {
      this.$refs.volumeContainer.style.display = "inline";
    },
    //设置音量
    setVolumeFun(event) {
      let volumeContainer = this.$refs.volumeContainer;
      let x =
        event.clientX -
        document
          .getElementsByClassName("volumeContainer")[0]
          .getBoundingClientRect().left;
      v = x / volumeContainer.clientWidth;
      this.$refs.volumeLength.style.width = v * 100 + "%";
      if (this.runningMusic != undefined) this.runningMusic.volume = v;
      for (let i = 0; i < this.allAudios.length; i++) {
        this.allAudios[i].volume = v;
      }
      this.$refs.yinLiang.src = require("../assets/img/声音.png");
    },
    //滑动音量
    slipVolumeFun(ev) {
      let contact = document.getElementsByClassName("contact")[1];
      let volumeContainer =
        document.getElementsByClassName("volumeContainer")[0];
      let volumeLength = document.getElementsByClassName("volumeLength")[0];
      let cha = volumeContainer.clientWidth;
      let contactL = contact.offsetLeft;
      let e = ev || window.event; //兼容性
      let mouseX = e.clientX; //鼠标按下的位置
      let newL = void 0;
      let runningMusic = this.runningMusic;
      let allAudios = this.allAudios;
      window.onmousemove = function (ev) {
        let e = ev || window.event;
        let moveL = e.clientX - mouseX; //鼠标移动的距离
        newL = contactL + moveL; //left值
        // 判断最大值和最小值
        if (newL < 0) {
          newL = 0;
        }
        if (newL >= cha) {
          newL = cha;
        }
        // 改变left值
        volumeLength.style.width = newL + "%";
        if (runningMusic != undefined) runningMusic.volume = Number(newL) / 100;
        for (let i = 0; i < allAudios.length; i++) {
          allAudios[i].volume = Number(newL) / 100;
        }
        // 计算比例
        // let bili = (newL / cha) * 100;
        // p.innerHTML = "当前位置" + Math.ceil(bili) + "%";
        return false; //取消默认事件
      };

      window.onmouseup = function () {
        window.onmousemove = false; //解绑移动事件
        return false;
      };
      return false;
    },
    //静音或解除静音
    muteOrNotFun() {
      if (this.runningMusic.volume === 0) {
        for (let i = 0; i < this.allAudios.length; i++) {
          this.allAudios[i].volume = 0.5;
        }
        this.$refs.yinLiang.src = require("../assets/img/声音.png");
        this.$refs.volumeLength.style.width = "50%";
      } else if (!this.runningMusic.muted) {
        for (let i = 0; i < this.allAudios.length; i++) {
          this.allAudios[i].volume = 0;
        }
        this.$refs.yinLiang.src = require("../assets/img/静音.png");
        this.$refs.volumeLength.style.width = "0%";
      }
    },
    //点击进度条，跳转音频位置
    setPlaceFun(event) {
      let progressContainer = this.$refs.progressContainer;
      let x =
        event.clientX -
        document
          .getElementsByClassName("progressContainer")[0]
          .getBoundingClientRect().left;
      if (this.runningMusic != undefined)
        this.runningMusic.currentTime =
          (x / progressContainer.clientWidth) * this.runningMusic.duration;
      else if (this.runningMusic === undefined) alert(1);
    },
    slipPlaceFun(event) {
      let progressContainer =
        document.getElementsByClassName("progressContainer")[0];
      let progress = document.getElementsByClassName("progress")[0];
      let cha = progressContainer.clientWidth;
      let currenwtProgress = progress.clientWidth;
      let e = event || window.event;
      let mouseX = e.clientX;
      let runningMusic = this.runningMusic;
      let volume = runningMusic.volume;
      window.onmousemove = function (ev) {
        runningMusic.volume = 0;
        let e = ev || window.event;
        let moveL = e.clientX - mouseX;
        let newL = currenwtProgress + moveL;
        if (newL < 0) newL = 0;
        if (newL >= cha) {
          newL = cha;
        }
        if (runningMusic != undefined) {
          runningMusic.currentTime =
            (newL / progressContainer.clientWidth) * runningMusic.duration;
        } else if (runningMusic === undefined)
          console.log("runningMusic is undefined");
        return false; //取消默认事件
      };

      window.onmouseup = function () {
        runningMusic.volume = volume;
        window.onmousemove = false; //解绑移动事件
        return false;
      };
      return false;
    },
    //随着音频播放，进度条自动前进
    updateFun() {
      let percent =
        (this.runningMusic.currentTime / this.runningMusic.duration) * 100;
      this.$refs.progress.style.width = percent + "%";

      this.$bus.$emit("getTime", this.runningMusic.currentTime);
      this.useInnerBeginFun();
    },
    //
    innerBeginFun(begin) {
      this.$refs.beginPlace.innerHTML = begin;
    },
    //显示音频总长度
    innerEndFun(end) {
      this.$refs.endPlace.innerHTML = end;
    },
    //调用innerBeginFun
    useInnerBeginFun() {
      let beginSec, beginMin, begin_0;
      beginSec = parseInt(this.runningMusic.currentTime % 60);
      beginMin = parseInt(this.runningMusic.currentTime / 60);
      begin_0 = beginSec > 9 ? beginSec : "0" + beginSec;
      this.innerBeginFun("0" + beginMin + ":" + begin_0);
    },
    //调用innerEndFun
    useInnerEndFun() {
      let endSec = parseInt(this.runningMusic.duration % 60);
      let endMin = parseInt(this.runningMusic.duration / 60);
      let end_0 = endSec > 9 ? endSec : "0" + endSec;
      this.innerEndFun("0" + endMin + ":" + end_0);
    },
    //下一首
    nextFun() {
      console.log("next");
      if (this.allIcon[this.getId])
        this.allIcon[this.getId].src = require("../assets/img/播放.png");
      this.getId++;
      if (this.getId > this.allAudios.length - 1) this.getId = 0;
      this.runningMusic.load();
      this.allAudios[this.getId].play();
      if (this.allIcon[this.getId])
        this.allIcon[this.getId].src = require("../assets/img/暂停.png");
      this.BigIcon = require("../assets/img/Big暂停.png");
      this.runningMusic = this.allAudios[this.getId];
      this.$bus.$emit("showWord", this.allMusic[this.getId].name);
      this.$bus.$emit("updateGetId", this.getId);
      this.$bus.$emit("changeImg", this.allMusic[this.getId].albumName);
      this.useInnerEndFun();
      console.log("nextone");
    },
    //上一首
    lastFun() {
      if (this.allIcon[this.getId])
        this.allIcon[this.getId].src = require("../assets/img/播放.png");
      this.getId--;
      if (this.getId < 0) this.getId = this.allAudios.length - 1;
      this.runningMusic.load();
      this.allAudios[this.getId].play();
      if (this.allIcon[this.getId])
        this.allIcon[this.getId].src = require("../assets/img/暂停.png");
      this.BigIcon = require("../assets/img/Big暂停.png");
      this.runningMusic = this.allAudios[this.getId];
      this.$bus.$emit("showWord", this.allMusic[this.getId].name);
      this.$bus.$emit("updateGetId", this.getId);
      this.$bus.$emit("changeImg", this.allMusic[this.getId].albumName);
      this.useInnerEndFun();
    },
    //暂停
    holdFun() {
      if (this.runningMusic.paused) {
        this.runningMusic.play();
        this.BigIcon = require("../assets/img/Big暂停.png");
        if (this.allIcon[this.getId])
          this.allIcon[this.getId].src = require("../assets/img/暂停.png");
        this.$bus.$emit("ratate", true);
      } else {
        this.runningMusic.pause();
        this.BigIcon = require("../assets/img/Big播放.png");
        if (this.allIcon[this.getId])
          this.allIcon[this.getId].src = require("../assets/img/播放.png");
        this.$bus.$emit("ratate", false);
      }
    },
  },
};
</script>

<style scoped>
@keyframes showFromBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
.MusicPlayer {
  user-select: none;
  width: 100vw;
  height: 80px;
  position: absolute;
  margin-top: 75vh;
  /* margin-left: 50vw;
  transform: translateX(-50%); */
  /* text-align: center; */
  border-radius: 20px;
  display: none;
  animation: showFromBottom 0.5s;
}

#controll-bottom {
  width: 100vw;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.daBoFang {
  user-select: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
#shangYiShou,
#xiaYiShou {
  user-select: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
}

#shangYiShou {
  /* position: absolute; */
  /* left: 265px;
  top: 40px; */
}
#BigBegin {
  margin: 0 20px;
  /* position: absolute; */
  /* left: 320px;
  top: 30px; */
}
#xiaYiShou {
  /* position: absolute; */
  /* left: 395px;
  top: 40px; */
}

#shangYiShou:hover,
.daBoFang:hover,
#xiaYiShou:hover {
  background: rgba(153, 153, 153, 0.2);
}

.progressGroup {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
.beginPlace,
.endPlace {
  user-select: none;
  font-family: "Harlow Solid";
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  width: 50px;
  height: 30px;
  line-height: 35px;
  /* position: absolute; */
  cursor: default;
}
.beginPlace {
  top: 7.5px;
  left: 65px;
}
.endPlace {
  top: 7.5px;
  right: 65px;
}
#volumeGroup {
  position: absolute;
  top: 49px;
  left: 58%;
  width: 100px;
  height: 25px;
}
.yinLiang {
  user-select: none;
  width: 25px;
  height: 25px;
  border-radius: 10px;
  position: absolute;
}
@keyframes shortToLong {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.volumeContainer {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 35px;
  display: block;
  cursor: pointer;
  animation: shortToLong 0.5s;
}
.volumeLength {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  height: 100%;
  width: 100%;
}
/*
    实现进度条
    */
.progressContainer {
  background: rgba(255, 255, 255, 0.3);
  margin: 15px;
  height: 3px;
  border-radius: 2px;
  width: 450px;
  cursor: pointer;
}
.progressGroup:hover .showContact {
  opacity: 1;
}
.progress {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}
.contact {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  position: relative;
  top: -3.5px;
  left: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  float: right;
}
.showContact {
  opacity: 0;
}
</style>
