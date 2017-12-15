<template>
  <div>
      <mt-header :title="'歌单'" class="homedetail-head">
            <div @click="goback" slot="left">
                <mt-button icon="back" class="back">返回</mt-button>
            </div>
        </mt-header>
  </div>
</template>

<script>
import router from "./router"
export default {
   methods:{
    goback(){
      router.push("/mydata")
    }
  }


}
</script>

<style>

</style>

