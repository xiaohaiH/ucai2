<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="col-xs-3 col-sm-3 col-md-2 col-lg-1" style="width:100px;" v-for="(item,index) in this.msg.subject_collection_items" :key="item.id">
         <router-link :to="'/vueProject/book/subject/'+item.id" tag="div"> 
          <img ref='iimg' class="img-responsive" :src="item.cover.url" />
          <div>
            <p>{{item.title}}</p>
            <p><i :style="'background:url(/vueProject/static/img/starScore.png) no-repeat 0 ' + parseInt(10 - Math.round(item.rating.value)) * -11 + 'px'"></i>{{item.rating.value}}</p>
          </div>
        </router-link>  
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
/* 引入Swipe */
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import '@/assets/css/Book/BookSwipe.css'

import Jsonp from 'jsonp'



  export default {
    name: 'swipe',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          slidesPerView: 6,
          spaceBetween: 0,
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 0
            }
          }
        },
        msg: ""
      }
    },
    props: ['sendJson','callback'], 
    created(){
      this.fiction();
    },
    methods: {
      fiction(){
        let url = this.sendJson;
        let callback = {
          param: 'callback',
          prefix: this.callback,
          name: this.callback
        };
        Jsonp(url,callback,(err,data)=>{
          if(err){
            console.log(err);
            return;
          };
          this.msg = data;
        });
      }
    }
  }
</script>
