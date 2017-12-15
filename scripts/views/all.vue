<template>
<div>
    <div class="head">
        <p>
            <span>ONE  &nbsp;IS  &nbsp;ALL</span>
            <router-link :to="{name:'search'}">
                 <i class="iconfont icon-sousuo"></i>
            </router-link>
       
        </p>

    </div>

    <div class="all">

      

    <div class="section box">

       
       
        <div class="load" v-if="close">
            <mt-loadmore :top-method="loadTop" 
                            :bottom-method="loadBottom" 
                            :bottom-all-loaded="allLoaded"
                            :bottom-distance="30"
                            
                               ref="loadmore" >
                              
            <div class="all-content">
            

            <div class="banner">
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(m,i) in allbanner" :key="i" class="images">
            <img :src="m.cover" alt="">
        </mt-swipe-item>
       
        </mt-swipe>

          </div>
              <div class="nav">
        <p>分类导航</p>
        <ul>

        </ul>

         </div>

         <ul class="content">
            <li v-for="(m,i) in allcontent" :key="i">
                <img :src="m.cover" alt="">
                <p>{{m.title}}</p>
            </li>
            
             </ul>
    

             </div>
            </mt-loadmore>
                 
        </div>
    </div>




   

    </div>


</div>
  
</template>

<script>
import { Indicator } from 'mint-ui';
import {mapState,mapActions} from "vuex"
export default {
    computed:{
        ...mapState([
            "allbanner",
            "allcontent",
            "close"
        ])
    },
    methods:{
        ...mapActions([
            "getallbanner",
            "getallcontent"
        ]),
        loadTop(){
            console.log("下拉刷新")
             // 加载更多数据
            setTimeout(()=>{
                // ajax  请求
                // this.changeMovie("http://47.94.208.182:3000/movie");  
                this.$refs.loadmore.onTopLoaded();  // 刷新 iscroll dom 
            },1500)
        },
        loadBottom(){
            console.log("上拉加载更多");
                // 下拉刷新
                setTimeout(()=>{
                    this.allLoaded = true;  //不糊触发二次刷新方法
                    this.$refs.loadmore.onBottomLoaded();  // 刷新 iscroll dom 
                    
            },2000)
        },
    },
    mounted(){

         console.log(this.close);
        Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
        });
        this.getallbanner("/allbanner")
        this.getallcontent("/allcontent")

    },
     beforeUpdate(){
        
        if(this.close){
            Indicator.close();
        }
    },
     data(){
        return{
           
            allLoaded:false,
            // auto:false
        }
    },



}
</script>

<style>

</style>
