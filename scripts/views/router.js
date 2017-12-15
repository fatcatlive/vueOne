import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

//单文件组件
import Guide from "./guide.vue";
import Layout from "./layout.vue";
import Home from "./home.vue";
import All from "./all.vue";
import My from "./my.vue";
import Search from "./search.vue";
import HomeDetail from "./homedetail.vue";
import Lag from "./lag.vue";
import Mydata from "./mydata.vue";
import Login from "./login.vue";
import Register from "./register.vue";
import Tuwen from "./tuwen.vue";
import Wenzhang from "./wenzhang.vue";
import Music from "./music.vue";
import Movie from "./movie.vue";
import Diantai from "./diantai.vue";
import Mynotice from "./mynotice.vue";
import Musiclist from "./musiclist.vue";
import Mydatas from "./mydatas.vue";
import Shezhi from "./shezhi.vue";



var routes=[
    {path:"/",component:Guide},
    {
        path:"/index",
        component:Layout,
        children:[
            {path:"home",name:"home",component:Home},
            {path:"my",name:"my",component:My},
            {path:"all",name:"all",component:All},
            {path:"*",redirect:"/index/home"}
        ]
    },
    {
        path:"/search",
        name:"search",
        component:Search,

    },
    {
        path:"/homeDetail/:id",
        name:"homeDetail",
        component:HomeDetail
    },
    {
        path:"/lag",
        name:"lag",
        component:Lag,
        children:[
            {path:"login",name:"login",component:Login},
            {path:"register",name:"register",component:Register},
            {path:"*",redirect:"/lag/login"}
        ]
       },
    {
        path:"/mydata",
        name:"mydata",
        component:Mydata,
        
    },
    {
        path:"/mydatas",
        name:"mydatas",
        component:Mydatas,
        children:[
            {path:"tuwen",name:"tuwen",component:Tuwen},
            {path:"wenzhang",name:"wenzhang",component:Wenzhang},
            {path:"music",name:"music",component:Music},
            {path:"movie",name:"movie",component:Movie},
            {path:"diantai",name:"diantai",component:Diantai},
            {path:"mynotice",name:"mynotice",component:Mynotice},
            {path:"musiclist",name:"musiclist",component:Musiclist}
        ]


    },
    {
        path:"/shezhi",
        name:"shezhi",
        component:Shezhi
    }
]

const router =new VueRouter({
    mode:"hash",
    routes
})

export default router;

