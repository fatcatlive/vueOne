<template>
<div class="section">
  <c-head></c-head>
   <div class="home">


     <div class="home-content">
     <div class="image"></div>
     <div class="title">插画|《纪念碑谷2》</div>
     <div class="content">
       <p>不安之中</p>
       <p>喜悦隐藏</p>
       <br><br>
       <p>面对生命挑战</p>
        <br><br>
       <p>何需</p>
       <p>固执终场</p>
       <p>但求</p>
       <p>放手飘扬</p>

     </div>
     <div class="bottom">
         <p>蔡康永</p>
         <p>
          <router-link to="/"><i class="iconfont icon-tag"></i><span>小记</span></router-link>
         <span class="spans"><i class="iconfont icon-fenxiang"></i></span>
          <span class="spans"><i class="iconfont icon-shoucang"></i></span>
           <span class="spans"><i class="iconfont icon-tag"></i></span>
         </p>
     </div>
     </div>

     <div class="home-model" v-for="(item,i) in home" :key="i">
      <p>- ONE AMAZING -</p>
      <h2>{{item.title}}</h2>
      <p>文/{{item.author.user_name}}</p>
      <router-link :to="{name:'homeDetail',params:{id:item.id},query:{title:item.title}}">
        <img :src="item.img_url" alt="">
      </router-link>
      
      <p>{{item.forward}}</p>
      <div class="bottom">
        <span>11月9日</span>
        <span class="spans"><i class="iconfont icon-fenxiang"></i></span>
         <span class="spans heart"  @click="addtomytuwen(item.id,item.title,item.img_url)"><i class="iconfont icon-shoucang"></i></span>
      </div>
     </div>

     

   </div>
  
</div>
  
</template>

<script>
import Head from "./head.vue"
import {mapState,mapActions} from "vuex";
import axios from "axios";
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import router from "./router"
export default {
  data(){
    return{
      title:"",
    }
  },
  computed:{
      ...mapState([
        "home",
      ]),
  },
  components:{
    "c-head":Head
  },
  methods:{
      ...mapActions({
            gethome:"gethome" 
      }),
      addtomytuwen(id,title,image){
        
        if(localStorage.username){
           axios.get("http://60.205.215.60:7777/addtomytuwen",{
             params:{
               id,
               username:localStorage.username,
               title:title,
               image:image
             }
           })
              .then(res=>{
                console.log(res.data)
                if(res.data=="1"){
                    Toast({
                          message: '收藏图文成功',
                          iconClass: 'icon icon-success'
                        });
                 
                }else{
                  Toast({
                          message: '亲，你已经收藏过了哟',
                          
                        });
                }
              })

        }else{
            MessageBox({
              title: '提示',
              message: '亲，还没有登录，要去登录吗?',
              showCancelButton: true
            }).then(
              setTimeout(function(){
                router.push("/lag/login")
              },3000)
              
            );

        }
          
      }
      
      
  },
  mounted(){
    this.gethome("/home")
     console.log(111)
    
  }

}
</script>

<style>

</style>
