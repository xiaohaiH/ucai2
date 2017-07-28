<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="col-xs-3 col-sm-3 col-md-2 col-lg-1" style="width:100px;" v-for="(item,index) in this.msg.subject_collection_items" :key="item.id">
         <router-link :to="'/vueProject/book/subject/'+item.id" tag="div"> 
          <div ref="bookListImgBox" class="bookListImgBox">
            <img :height="ImgInitHeight" ref='bookListImg' class="img-responsive" :src="item.cover.url" />
          </div>
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
        msg: "",
        ImgInitHeight: 0,
        timeoutSum: 0
      }
    },
    props: ['sendJson','callback'], 
    created(){
      this.fiction();
    },
    mounted(){
      window.addEventListener('resize',this.ImgResize);
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
            if(err == 'Error: Timeout' && this.timeoutSum < 3){
              this.fiction();
            }
            return;
          };
          this.msg = data;
        });
        setTimeout(function(){
          let $bookListImgBox = $('.bookListImgBox');
          let $bookListImg = $('.bookListImgBox').find('img')[0].width;
          $bookListImgBox.css({'height': $bookListImg/ 0.7 + 'px'})
        },500);
      },
      ImgResize(){
        if(!(this.$route.path.match(/^\/vueProject\/book$/))){
          return;
        }
        let VbookListImgBox = this.$refs.bookListImgBox;
        let VbookListImgWidth = this.$refs.bookListImg[0].width;
        for(let i = 0;i < VbookListImgBox.length;i++){
          VbookListImgBox[i].style.height = VbookListImgWidth / 0.7 + 'px';
        };
      }
    }
  }
</script>
