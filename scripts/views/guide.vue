<template>
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="swiper" class="box">
        <swiper-slide class="slide" v-for="(m,i) in guideImg" :key="i">
            <img :src="m.src" alt="" @click="gotoIndex(i)">
        </swiper-slide>
    </swiper>
</template>

<script>
import p1 from "../../assets/images/guide1.jpg"
import p2 from "../../assets/images/guide2.jpg"
import p3 from "../../assets/images/guide3.jpg"
import p4 from "../../assets/images/guide4.jpg"
import p5 from "../../assets/images/guide5.jpg"

import router from "./router"
export default {
    data(){
        return {
            guideImg:[
                {src:p1},
                {src:p2},
                {src:p3},
                {src:p4},
                {src:p5},
            ],
            notNextTick:true,
            swiperOption:{
                loop:false,
                autoplay: false,
                direction:"horizontal",
                 resistanceRatio:0,
                pagination: '.swiper-pagination',
            }

        }
    },
    computed:{
        swiper:{
            get(){
                return this.$refs.swiper.swiper
            }
        }
    },
    methods:{
        gotoIndex(id){
           if(id==4){
               router.push("/index/home")
           }
        }
    },
    beforeRouteEnter(to,from,next){
        console.log(to);
        if(localStorage.visitCount){
            localStorage.visitCount++;
            router.push("/index/home")
        }else{
            localStorage.visitCount=1;
            next();
        }
    }


}
</script>

<style scoped>

  .box,.slide,img{
    width: 100%;
    height: 100%;
    background: yellow;
   }

</style>
