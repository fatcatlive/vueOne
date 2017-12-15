<template>
    <div class="section box">
        <v-head title="list 列表" class="my"></v-head>
        <div class="load" v-if="close">
            <mt-loadmore :top-method="loadTop" 
                            :bottom-method="loadBottom" 
                            :bottom-all-loaded="allLoaded"
                            :bottom-distance="30"
                            
                             ref="loadmore" >
             <ul class="list clearfix">
                    <li v-for="(m,i) in movie" :key="i"><img :src="m.images.large" alt=""></li>
            </ul>
            </mt-loadmore>
                 
        </div>
    </div>
</template>

<script>
import Head from "../components/Head.vue"
import p1 from "../../assets/img/2.jpg"
import { Indicator } from 'mint-ui';
import {mapState,mapActions} from "vuex";
export default {
    mounted(){
        console.log(this.close);
        Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
        });
        this.getMovie("http://47.94.208.182:3000/movie");
    },
    beforeUpdate(){
        
        if(this.close){
            Indicator.close();
        }
    },
    data(){
        return{
            p1,
            allLoaded:false,
            // auto:false
        }
    },
    computed:{
        ...mapState([
            "movie",
            "close"
        ])
    },
    components:{
        "v-head":Head
    },
    methods:{
        ...mapActions([
            "getMovie" ,  // 提交  action type
            "changeMovie"
        ]),
        loadTop(){
            console.log("下拉刷新")
             // 加载更多数据
            setTimeout(()=>{
                // ajax  请求
                this.changeMovie("http://47.94.208.182:3000/movie");  
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
}
</script>

<style scoped lang="less">

// 这里注释看看效果
.mint-loadmore{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    overflow: scroll;
}
.box{
    display: flex;
    flex-direction: column;
}
.load{
    flex:1;
    position: relative;
    .list{
          
        li{
            width:50%;
            height: 270px;
            float: left;
            line-height: 70px;
            margin-top:20px;
            box-sizing: border-box;
            img{
                width:100%;
                height:100%;
            }
        }
        li:nth-child(odd){
            padding-right:10px;
        }
        li:nth-child(even){
            padding-left:10px;
        }
    }
}
</style>
