<template>
  <div class="shezhi">
      <mt-header :title="'设置'" class="homedetail-head">
            <div @click="goback" slot="left">
                <mt-button icon="back" class="back">返回</mt-button>
            </div>
     </mt-header>

  <mt-index-list  :show-indicator="false">
    <mt-index-section index="设置" class="box">
    <mt-cell title="夜间模式" class="li"></mt-cell>
    <mt-cell title="流量播放提醒" class="li"></mt-cell>
    <mt-cell title="清除缓存" class="li"></mt-cell>
  </mt-index-section>
  <mt-index-section index="反馈" class="box">
    <mt-cell title="意见与反馈" class="li"></mt-cell>
    <mt-cell title="关注我们" class="li"></mt-cell>
    <mt-cell title="给一个评分" class="li"></mt-cell>
  </mt-index-section>

  <mt-index-section index="关于" class="box">
    <mt-cell title="用户协议" class="li"></mt-cell>
    <mt-cell title="版本号" class="li"></mt-cell>

  </mt-index-section>

  <mt-index-section index="" class="box">
    <p  class="exit" @click="exit">退出登录</p>
  </mt-index-section>


</mt-index-list>



  </div>
</template>

<script>
import { IndexList, IndexSection } from 'mint-ui';
import router from "./router"
export default {
    methods:{
        exit(){
            localStorage.removeItem("username");
            console.log(11111)
             router.push("/index/home")
        },
        goback(){
            router.push("/index/home")
        }
    }

}
</script>

<style>

</style>
