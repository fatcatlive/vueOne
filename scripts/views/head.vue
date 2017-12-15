<template>
  <div>
     <header>
        <p>
            <span>{{year}}</span>/
            <span>{{month}}</span>/
            <span>{{day}}</span>
        </p>
         <router-link  :to="{name:'search'}">
           <i class="iconfont icon-sousuo">
           </i>
         </router-link>
         
     </header>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
     computed:{
         ...mapState([
             "year",
             "month",
             "day"
            ])
     }
}
</script>

<style>

</style>
