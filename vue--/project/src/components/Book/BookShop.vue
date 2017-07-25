<template>
  <!--  -->
  <div class="container-fluid">
    <div class="bookshopHeader">
      <div class="fictionTitle">
        <h4 class="pull-left">
          <!-- {{data.subject_collection.name}} -->
          星空书店
        </h4>
        <router-link to="/vueProject/API未写" tag="a" class="pull-right">更多</router-link>
      </div>
      <div class="row">
         <div class="media">
          <div class="pull-left col-xs-4 col-sm-3 col-md-2 col-lg-2">
            <router-link to="/vueProject/这个API好像有问题" tag="a" href="#">
               <img class="media-object img-responsive" :src="data.header.cover.url" alt="">  
            </router-link>
          </div>
          <div class="pull-right col-xs-8 col-sm-8 col-md-9 col-lg-10 bookshopInfo">
            <div class="bookshopTitle clearfix">
               <h4 class="pull-left">{{data.header.title}}</h4> 
               <p class="pull-right">￥{{data.header.price}}</p> 
            </div>
             <p>{{data.header.info}}</p> 
          </div>
        </div> 
      </div>
    </div>
    <div class="bookshopContent">
      <swiper :options="swiperOption">
        <swiper-slide class="row" v-for="(item,index) in data.subject_collection_items" :key="item.id">
          <router-link to="/vueProject/api获取不到" tag="div" class="bookProduct">
            <p>
              <img class="img-responsive" :src="item.cover.url" alt="" />
            </p>
            <p>
              <span>{{item.title}}</span>
              <span>￥{{item.price}}</span>
            </p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/Book/Bookshop.css'
  import Jsonp from 'jsonp'
  export default {
    name: 'bookshop',
    data() {
      return {
        data: {
          header: {
            cover: {}
          },
          subject_collection_items: {

          }
        },
        swiperOption: {
          paginationClickable: true,
          slidesPerView: 6,
          spaceBetween: 50,
          breakpoints: {
            1024: {
              slidesPerView: 5,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }
        }
      }
    },
    created(){
      this.bookshopJsonp();
    },
    methods: {
      bookshopJsonp(){
        let url = 'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?os=ios&callback=jsonp3&start=0&count=8&loc_id=0&_=1500689130305';
        let callbackData = {
          param: 'callback',
          prefix: 'jsonp3',
          name: 'jsonp3'
        };
        Jsonp(url,callbackData,(err,data)=>{
          if(err){
            console.log(err);
            return;
          };
          this.data = data;
        });
      }
    },
  }
</script>
