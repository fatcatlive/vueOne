<template>
  <div class="homedetail">
       <mt-header :title="'one'" class="homedetail-head">
            <div @click="goback" slot="left">
                <mt-button icon="back" class="back">返回</mt-button>
            </div>
        </mt-header>

        <div class="homedetail-content">
            <div class="ttop">
                 <h1>{{homedetails.title}}</h1>
                 <p>文/{{homedetails.author.user_name}}</p>
            </div>
            
            <div class="content">
                <div>
                     刘一朵指着床尾的摇柄对我说，摇六下，是仰卧，能喝水。摇十二下，能坐直，他坐不直，往下出溜，你给他垫个枕头。我说，你铺垫了吗？她说，你自己跟他说一下。我说，还是应该铺垫一下。她说，他现在疼得一会明白，一会糊涂，你自己铺垫。<br><br> 
                     刘一朵比我高，大概高十五公分，主要是高在腿上，上半身我和她差不多，脖子我比她还长一点，主要是腿，腿长，胳膊也长。所以据我目测，我一下摇不了她那么瓷实，可能得七下，十三下。这是一间单人病房，窗帘和沙发是蓝的，上午的太阳一照，好像在透视。茶几上摆着几个橘子和一只细口花瓶，花瓶里没有花，暖气太热，一般花都死，刘一朵买了一盆仙人掌，放在花瓶旁边，像是一个自卑的胖子。夜里守夜的是刘一朵她妈，我叫阿姨，为了显得亲切，我不说你妈，一般都说我姨。此时我姨已经回去，睡在她家那张巨大的床上。床有四柱，上有木顶，极像轿子，床体极大，两米乘两米五，放于主卧。白天是刘一朵的班，她请了四个月假，遵医嘱，四个月差不多，顶多五个月，我叔也该走了。晚上有时我住在刘家，家的面积有点大，楼下一层，楼上一层，还有个天台。刘一朵说自己住，放个屁都有回音.<br><br>
                </div>
                <p>
                    选自{{homedetails.author.user_name}}短片小说集《小说家》
                </p>
                <p>
                    责任编辑：阿芙拉 afra@wufazhuce.com
                </p>
               
            </div>


            <div class="bbottom">

                <div class="author">
                <p><span>作者</span></p>
                <div class="authorcontent">
                    <div class="circle">
                         <img :src="homedetails.author.web_url">
                    </div>

                    <div class="namess">
                        <span>{{homedetails.author.user_name}}@{{homedetails.author.user_name}}</span><br>
                        <span>沈阳人，小说家</span>
                    </div>
                    <div class="notice">
                       <span >关注</span>
                    </div>
                    
                </div>

            </div>
            <div class="commitlist">
                <p>
                    <span>评论列表</span>
                </p>
                <ul>  
                     <li class="commitcontent" v-for="(m,i) in homecommit1" :key="i">
                    <div class="top">
                        <div class="circle">
                              <img :src="m.user.web_url">
                        </div>
                        <div class="guan">
                              {{m.user.user_name}}
                        </div>
                        <p class="date">
                            {{m.input_date}}
                        </p>
                       
                    </div>
                    <div class="center">
                        {{m.content}}
                    
                    </div>
                    <div class="bottom">
                        <span>{{m.praisenum}}</span>
                         <span @click="addpraisenums(m.id)"><i class="iconfont icon-dianzan1"></i></span>
  
                          <span><i class="iconfont icon-xiaoxi"></i></span>
                    </div>
                </li>

                </ul>
               

            </div>

            </div>


            </div>    

        <div class="homedetail-foot">
            <a href="##" @click="addtocommits">写一个评论...</a>
            <span><i class="iconfont icon-fenxiang"></i></span>
            <span><i class="iconfont icon-xiaoxi"></i></span>
            <span><i class="iconfont icon-shoucang"></i></span>
            
        </div>
  </div>
</template>

<script>
import router from "./router";
import axios from "axios";
import {mapState,mapActions} from "vuex";
import { MessageBox } from 'mint-ui';

export default {
    data(){
        return{
           count:1
        }
    }
   ,
    computed:{
       ...mapState([
           "homecommit1",
           "home",
           "homedetail",
           "homedetails"
       ])
    },
    methods:{

        ...mapActions({
           getCommit:"getCommit",
           gethomedetail:"gethomedetail",
           addtocommit:"addtocommit",
           addpraisenum:"addpraisenum"
         }),


        goback(){
             router.go(-1);
        },
        addtocommits(){
            var id= this.$route.params.id;
            this.count++;
            var username=localStorage.username;
            if(username){
                MessageBox.prompt('请输入').then(({ value, action }) => {
                console.log(value)
                this.addtocommit("/addtocommit?username="+username+"&content="+value);
                
                setTimeout(function(){
                    router.push("/homeDetail/"+id)
                },2000)
               })

            }else{
                 MessageBox({
              title: '提示',
              message: '亲，还没有登录，要去登录吗?',
              showCancelButton: true
            }).then(
              setTimeout(function(){
                router.push("/lag/login")
              },2000)
              
            );

            }
            

        },
        addpraisenums(id){
            console.log(id);
              console.log(this.count)
            this.count=(this.count==1)?0:1;
            console.log(this.count)
            this.addpraisenum("/addpraisenum?id="+id+"&count="+this.count)

        }
    },
    mounted(){

        var id= this.$route.params.id;
        console.log(id)
        this.getCommit("/homecommit1");
        this.gethomedetail("/homedetail?id="+id); 

    }

}
</script>

<style>

</style>
