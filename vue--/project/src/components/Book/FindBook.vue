<template>
  <div class="FindbookBox">
    <div class="FindbookTitle">发现好图书</div>
    <div class="FindbookContent">
       <swiper :options="swiperOption">
        <swiper-slide  class="FindbookProduct">
          <router-link to="/vueProject/API有问题" tag="p">小波看书</router-link>
        </swiper-slide>
        <swiper-slide  class="FindbookProduct">
          <router-link to="/vueProject/API有问题" tag="p">村上春树周边</router-link>
        </swiper-slide>
        <swiper-slide  class="FindbookProduct">
          <router-link to="/vueProject/API有问题" tag="p">我凭名字认定了你</router-link>
        </swiper-slide>
        <swiper-slide  class="FindbookProduct">
          <router-link to="/vueProject/API有问题" tag="p">不可饶恕的女人们</router-link>
        </swiper-slide>
        <swiper-slide  class="FindbookProduct">
          <router-link to="/vueProject/API有问题" tag="p">爱欲书</router-link>
        </swiper-slide>
        <swiper-slide  class="FindbookProduct">
          <router-link to="/vueProject/API有问题" tag="p">他们还写侦探小说</router-link>
        </swiper-slide>
        <swiper-slide  class="FindbookProduct">
          <router-link to="/vueProject/API有问题" tag="p">人生识字始忧患</router-link>
        </swiper-slide>
        <swiper-slide  class="FindbookProduct">
          <router-link to="/vueProject/API有问题" tag="p">詩歌書店</router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/Book/FindBook.css'
  export default {
    name: 'findbook',
    data(){
      return {
        msg: {},
        swiperOption: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          paginationClickable: true,
          spaceBetween: 10,
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
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
      this.$nextTick(()=>{
        this.FindbookColor();
      });
    },
    methods: {
      FindbookColor(){
        let el = $(".FindbookProduct");
        for(let i=0;i<el.length;i++){
          let r = parseInt(Math.random() * 256);
          let g = parseInt(Math.random() * 256);
          let b = parseInt(Math.random() * 256);
          el.eq(i).css({'color':'rgb(' + r + ',' + g + ',' + b + ')','border-color':'rgb(' + r + ',' + g + ',' + b + ')'})
        }
      }
    }
  }
</script> 
