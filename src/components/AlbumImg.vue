<template>
  <!--专辑图片-->
  <div id="out">
    <div id="imgDiv">
      <img id="img" :src="imgUrl" height="300" width="300" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumImg",
  props: ["imgUrl"],
};
</script>

<style scoped>
#out {
  position: fixed;
  left: 5vw;
  top: 5vh;
  transition: 1s;
  user-select: none;
}
#imgDiv,
#img {
  user-select: none;
  margin: 5px;
  width: 300px;
  height: 300px;
  border-radius: 50px;
  box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.5);
}
</style>