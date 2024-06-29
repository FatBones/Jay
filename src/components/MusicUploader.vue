<template>
  <div>
    <label for="file-upload" class="custom-button"></label>
    <input
      type="file"
      id="file-upload"
      class="musicHandler"
      ref="fileInput"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
// import axios from "axios";
import { uploadMusic } from "../api/upload.js";
export default {
  name: "MusicUploader",
  props: ["album"],
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      this.uploadAudio();
    },
    async uploadAudio() {
      let formData = new FormData();
      formData.append(
        "audio",
        this.selectedFile,
        encodeURIComponent(this.selectedFile)
      );

      await uploadMusic(formData, this.selectedFile.name, this.album);
      this.$bus.$emit("changeIsAudioReady", this.selectedFile.name);
      // this.$notify({
      //   title: `${this.selectedFile.name} 上传成功`,
      //   type: "success",
      //   duration: 3000,
      //   offset: 50
      // });
    },
  },
};
</script>

<style>
.musicHandler {
  display: none;
}
.custom-button {
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-size: cover;
  display: block;
  background-image: url("../assets/img/uploadMusic.png");
}
</style>