import router from "./router"
import Vue from "vue";

import VueAwesomeSwiper from 'vue-awesome-swiper'
// mount with global
Vue.use(VueAwesomeSwiper)  // 全局使用

import MintUI from "mint-ui";
import 'mint-ui/lib/style.css'
Vue.use(MintUI);   //  全局使用
import "./ui.js";



import store from "../vuex/store.js"
const app=new Vue({
    el:"#app",
    router,
    store,
    data:{
        transitionName:"slide-right"
    },
    
    watch:{
        "$route":function(to,from){
            console.log(to);
            console.log(from);
            
         
            var toLength = to.path.split("/").length;
            var fromLength = from.path.split("/").length;
            this.transitionName = toLength>fromLength?"slide-left":"slide-right";
       
        }
    }
})