<template>
  <div>
    这是主页
    <swipe/>
  </div>
</template>
<script>
    import Vue from 'vue'
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import Swipe from '@/components/Swipe.vue'

    Vue.use(VueAwesomeSwiper)
export default {
  name: 'home',
  data(){
      return {
        username : 'xiaohai'
      }
  }
}
</script>
