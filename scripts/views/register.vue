
<template>
<div class="login">

    <mt-header :title="'注册'" class="login-head">
            <div @click="goback" slot="left">
                <mt-button icon="back" class="back">返回</mt-button>
            </div>
   </mt-header>
   <div class="login-form">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" class="input" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password " class="input" v-model="password"></mt-field>
        <mt-field label="确认密码" placeholder="请输入密码" type="password " class="input" ></mt-field>
        <mt-button type="primary" class="submit" @click="go">下一步</mt-button>
   </div>
   
</div>
  
</template>
<script>
import router from "./router";
import axios from "axios";
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            username:"",
            password:""
        }

    },
    methods:{
        goback(){
            router.go(-1)
        },
        go(){
             axios.get("/user/register",{
                 params:{
                 username:this.username,
                 password:this.password

             }})
             .then(res=>{
                 console.log(this.username)
                 console.log(this.password)
                 console.log(222);
                 console.log(res.data)
                  Toast({
                          message: '注册成功，即将跳转到登录页面',
                     });
                     setTimeout(function(){
                          router.push("/lag/login")

                     },3000)

               
             })
        }

    }


}
</script>

<style>



</style>
