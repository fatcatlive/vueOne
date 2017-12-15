<template>
<section class="section">


    <div class="my">
    <div  class="my-box">
     <router-link :to="{name:'login'}">
          <span></span>
          <span>点击登录</span>
     </router-link>
    
    
    </div>
    </div>



</section>
  
</template>

<script>
import router from "./router"
export default {
    
    mounted(){
        if(localStorage.username){
            router.push("/mydata")

        }

    }
 

}
</script>

<style>

</style>
