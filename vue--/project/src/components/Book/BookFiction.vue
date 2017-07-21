<template>
  <div class="container-fluid">

    <div style="overflow:hidden;">
      <h3 class="pull-left">最受关注图书｜虚构类</h3>
      <router-link to="'/book/'+:id" tag="a" class="pull-right">更多</router-link>
    </div>

    <div>
         <swipe sendJson="https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&callback=jsonp1&start=0&count=8&loc_id=0&_=1500621296825"></swipe>
    </div>

  </div>
</template>

<script>

/* 引入轮播图 */
import Swipe from './Swipe.vue'

  export default {
    name: 'carrousel',
    data(){
      return {
      }
    },
    components: {
      swipe: Swipe
    },
    created(){
      // console.log( this.$router instanceof( Array));
      // this.$router.push({path:'/index',query:{name:this.msg}})
    }
  }
</script>