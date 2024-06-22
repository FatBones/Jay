<template>
  <div id="font">
    <p id="aF">{{ musicTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "MusicTitle",
  props: ["musicTitle"],
};
</script>

<style scoped>
#font {
  width: 800px;
  height: 80px;
  margin: 0 auto;
}
#aF {
  user-select: none;
  font-family: "迷你简卡通";
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  margin: 0 auto;
  color: #000000;
  display: block;
  cursor: default;
}
</style>