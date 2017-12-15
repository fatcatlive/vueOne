<template>

<div class="divs">
  <mt-header :title="'图文'" class="homedetail-head">
            <div @click="goback" slot="left">
                <mt-button icon="back" class="back">返回</mt-button>
            </div>
  </mt-header>


        <div class="tuwen">
       
        <ul>
          <li v-for="(m,i) in mytuwendata" :key="i">
            <div class="top">
               <router-link :to="{name:'homeDetail',params:{id:m.twid}}">
               <img :src="m.image" alt="">
                </router-link>
            </div>
            <div class="bottom">
              <p>{{m.title}}</p>
              <p  class="delete" @click="deletes(m.twid)">删除</p>
            </div>
          
          </li>
          
        </ul>

        </div>


</div>
  
</template>

<script>
import router from "./router";
import {mapState,mapActions} from "vuex"
export default {

  computed:{
    ...mapState([
         "mytuwendata"
    ])
  },
   methods:{
    goback(){
      router.push("/mydata")
    },
    deletes(id){
      console.log(id);

      this.mytuwendelete("/mytuwendelete?id="+id)

    },
    ...mapActions({
      getmytuwen:"getmytuwen",
      mytuwendelete:"mytuwendelete"
    }),
    

  },
  mounted(){
    this.getmytuwen("/getmytuwen")

  }


}
</script>

<style scoped>
  .divs{
    width: 100%;
    height: 100%;
    position: relative;
  }


</style>
