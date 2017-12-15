<template>
<section class="section">
    <router-view></router-view>
    <v-foot></v-foot>

</section>
  
</template>

<script>
import Foot from "../components/foot.vue"
export default {
    components:{
        "v-foot":Foot
    }


}
</script>

<style>

</style>
