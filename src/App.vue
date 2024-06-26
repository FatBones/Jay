<template>
  <div id="allOfThose" ref="allOfThose">
    <div id="back"></div>
    <div
      style="
        -webkit-app-region: drag;
        height: 5vh;
        width: 100%;
        display: flex;
        justify-content: flex-end;
      "
    >
      <img src="./assets/img/min.png" class="icon_style" @click="small()" />
      <img
        v-if="!currentStatus"
        src="./assets/img/full.png"
        class="icon_style"
        @click="big()"
      />
      <img
        v-else
        src="./assets/img/review.png"
        class="icon_style"
        @click="big()"
      />
      <img src="./assets/img/close.png" class="icon_style" @click="close()" />
    </div>
    <router-view v-if="isRouterAlive"></router-view>
    <MusicIcon />
    <!-- <ClientPeople /> -->
    <!-- <PersonalPage @click="toPersonalPage()" /> -->
  </div>
</template>

<script>
import MusicIcon from "./components/MusicIcon.vue";
// import ClientPeople from "./components/ClientPeople.vue";
// import PersonalPage from "./PersonalPage/PersonalPage.vue";
const { ipcRenderer } = window.require("electron");
export default {
  name: "App",
  components: {
    // ClientPeople,
    MusicIcon,
    // PersonalPage,
  },
  // 页面重新加载
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
      currentStatus: void 0,
    };
  },
  beforeCreate() {
    document
      .getElementById("allOfThose")
      .setAttribute(
        "style",
        "background-image: linear-gradient(to right, #0e979e, #2f9f9d, #45a69b, #59ad9a, #6cb499);"
      );
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    small() {
      ipcRenderer.send("min");
    },
    big() {
      let currentWidth = void 0;
      let currentHeight = void 0;
      if (!this.currentStatus) {
        currentWidth = document.getElementById("allOfThose").clientWidth;
        currentHeight = document.getElementById("allOfThose").clientHeight;
      }
      ipcRenderer.send("max", currentWidth, currentHeight);
    },
    close() {
      ipcRenderer.send("close");
    },
    getCurrentScreemStatus() {
      ipcRenderer.on("currentStatus", (event, data) => {
        this.currentStatus = data;
      });
    },
    toPersonalPage() {
      this.$router.push("/personalpage");
    },
  },
  mounted() {
    this.getCurrentScreemStatus();
  },
};
</script>

<style>
* {
  user-select: none;
}
html {
  overflow: hidden;
}
body {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
body::-webkit-scrollbar {
  width: 0px;
}
.icon_style {
  -webkit-app-region: no-drag;
  background-color: transparent;
  border-color: transparent;
  color: black;
  margin: 0;
  width: 14px;
  height: 14px;
  padding: 15px 15px;
}
.max {
  background-image: url("./assets/img/full.png");
}
.restore {
  background-image: url("./assets/img/review.png");
}
#allOfThose {
  border-radius: 10px;
  widows: 100vw;
  height: 100vh;
}
</style>
