<template>
<div class="login">

    <mt-header :title="'登录'" class="login-head">
            <div @click="goback" slot="left">
                <mt-button icon="back" class="back">返回</mt-button>
            </div>
    </mt-header>
   <div class="login-form">
        <mt-field label="用户名" placeholder="请输入用户名" class="input" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password " class="input"  v-model="password"></mt-field>
        <mt-button type="primary" class="submit" @click="go">登录</mt-button>
   </div>
   <div class="login-foot">
       <router-link :to="{name:'register'}">免费注册</router-link>
        <router-link :to="{name:'register'}">忘记密码？</router-link>
   </div>
   
</div>
  
</template>

<script>
import { Toast } from 'mint-ui';
import router from "./router";
import {mapState,mapActions} from "vuex";
import axios from "axios"
export default {
    data(){
        return {
          username:"",
          password:""
        }
    },
    methods:{
        goback(){
            router.push("/index/my")
            
        },
        go(){

            if(this.username&&this.password){
                axios.get("/login",{
                    params:{
                        username:this.username,
                        password:this.password
                    }
                })
                   .then(res=>{
                       console.log(111);
                       console.log(res.data)
                       if(res.data=="1"){
                            Toast({
                          message: '登录成功，即将跳转',
                            });
                            console.log(this.username)
                            localStorage.username=this.username;
                            setTimeout(function(){
                                 router.push("/mydata") 
                            },3000)
                            

                       }else{
                             Toast({
                          message: '登录失败',
                            });

                       }
                   })
            }else{
                 Toast({
                          message: '用户名或密码不能为空',
                    });

            }
           
        }

    }


}
</script>

<style>



</style>
