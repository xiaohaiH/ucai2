<template>
    <div id="BigBox">
        <Banner></Banner>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>



<script>
/* banner条 */
import Banner from '@/components/Home/Banner'
export default {
    name: 'app',
    data(){
      return {
        msg : ''
      }
    },
    components: {
        Banner: Banner
    }
}
</script>

<style scoped>
#content{
  margin-top:70px;
}
#BigBox{
  min-width:320px; 
}
</style>

