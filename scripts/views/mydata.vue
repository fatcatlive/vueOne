<template>
<div class="mydata">

    <div class="mydata-top">
        <div class="circle">
            <span></span>
            <span>{{username}}</span>

        </div>
        <div class="make">
            <div class="up">
                 <p><i class="iconfont icon-tag"></i><span>制作小记</span></p>
            </div>
            <div class="down">
                人生在世唯一真正拥有...
            </div>
           

        </div>

    </div>
    <div class="mydata-center">
        <div class="up">
            <p>我的收藏</p>
        </div>
        <div class="down">
            <ul>
                <router-link :to="{name:'tuwen'}">
                    <i class="iconfont icon-tuwen"></i>
                    <span>图文</span>
                </router-link>
                <router-link :to="{name:'wenzhang'}">
                    <i class="iconfont icon-yueduliang_"></i>
                    <span>文章</span>
                </router-link>
                <router-link :to="{name:'music'}">
                    <i class="iconfont icon-yinyue"></i>
                    <span>音乐</span>
                </router-link>
                <router-link :to="{name:'movie'}">
                    <i class="iconfont icon-shipinbofangyingpian"></i>
                    <span>影视</span>
                </router-link>
                <router-link :to="{name:'diantai'}">
                    <i class="iconfont icon-diantai"></i>
                    <span>电台</span>
                </router-link>
            </ul>
        </div>


    </div>
    <div class="mydata-bottom">
        <ul>
            <router-link :to="{name:'mynotice'}">
                <i class="iconfont icon-wodeguanzhu"></i>
                <span>我的关注</span>
                  <span>></span>
                <span>23</span>
               
               
            </router-link>
            <router-link :to="{name:'musiclist'}">
                <i class="iconfont icon-bofang"></i>
                <span>歌单</span>
                <span>></span>
                <span>23</span>
                
            </router-link>
        </ul>

    </div>
    <c-foot></c-foot>

    <router-link :to="{name:'shezhi'}" class="mydata-shezhi" >
        <i class="iconfont icon-shezhiicon"></i>
    </router-link>

    <router-view></router-view>
 
</div>
</template>

<script>
import Foot from "../components/foot.vue";
import {mapState,mapActions} from "vuex"
export default {
    computed:{
         ...mapState([
             "username"
         ])
    },
    components:{
        "c-foot":Foot
    }

}
</script>

<style>

</style>


