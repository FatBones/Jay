<template>
  <div id="backIcon">
    <router-link to="/home" replace><img class="tuBiao" ref="tuBiao" src="../assets/img/图标.png" width="30" height="30"></router-link>
  </div>
</template>

<script>
export default {
    name:'MusicIcon',
    mounted(){
        this.$bus.$on("ratate",(isRatate)=>{
            if(isRatate)this.$refs.tuBiao.style.animationPlayState = "running";
            else this.$refs.tuBiao.style.animationPlayState = "paused";
        })
    },
    beforeDestory(){
        this.$bus.$off("ratate");
    }
}

</script>

<style scope>
    #backIcon{
        width: 33px;
        height: 33px;
        position: absolute;
        bottom: 10%;
        right: calc(5vw + 120px);
        border-radius: 10px;
    }
    #backIcon img{
        animation: a 3s linear/*保持速度一致*/  infinite;
        animation-play-state: paused;
    }
    .tuBiao{
         user-select: none;
    }
    @keyframes a {
        from{transform: rotate(0);}
        to{transform: rotate(360deg);}
    }
</style>
