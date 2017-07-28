<template>
  <div class="container-fluid">
    <h3>最受关注图书 | {{bookType}}</h3>
    <div class="row BooksList">
      <router-link :to="'/vueProject/book/subject/' + item.id" tag="figure" class="clearfix" v-for="(item,index) in bookInfo.subject_collection_items" :key="item.id">
        <p class="pull-left col-xs-3 col-sm-2 col-md-2 col-lg-1">
          <img :src="item.cover.url" class="img-responsive" />
        </p>
        <figcaption class="pull-left col-xs-8 col-sm-9 col-md-9 col-lg-10">
          <div class="clearfix title">
            <h4 class="pull-left">{{item.title}}</h4>
            <span v-show="item.actions[0]" class="pull-left">{{item.actions[0]}} </span>
          </div>
           <p><i :style="'background:url(/vueProject/static/img/starScore.png) no-repeat 0 ' + parseInt(10 - Math.round(item.rating.value)) * -11 + 'px'"></i>{{item.rating.value}}</p>
          <p>{{item.info}}</p> 
        </figcaption>
      </router-link>
    </div>
    <div class="warnBox">
      <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>没有更多了哦！</strong>
      </div>
      
    </div>
  </div>
</template>

<script>
/* 引入样式 */
import '@/assets/css/Book/BookRankList.css'

import Jsonp from 'jsonp'
export default {
  name: 'bookRankList',
  data(){
    return {
      bookInfo: {},
      bookType: '',
      start: 0,
      total: 20,
      lock: false,
      scrollRoll: null,
      timeoutSum: 0
    }
  },
  created(){ 
    this.SendJsonp();
  },
  mounted(){
    window.addEventListener('scroll',this.FallsFlow);
  },
  methods: {
    SendJsonp(waterFall){
      /* 截流 */
      if(this.lock){
        return ;
      };
      this.lock = true;
      let url = '';
      let val = this.$route.path.match(/hotFiction/g);
      if(waterFall){
        if(this.start >= this.total){
          $('.warnBox').css({'display':'block'});
          setTimeout(()=>{
            $('.warnBox').fadeOut();
          },1500);
          return ;
        };
        this.start + 18 > this.total?this.start = this.total:this.start += 18;
      };
      if(val){
        this.bookType = '虚构'
        url = 'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=android&for_mobile=1&callback=cb&start=' + this.start + '&count=18&loc_id=0&_=1500784624677';
      }else{
        this.bookType = '非虚构'
        url = '        https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?os=android&for_mobile=1&callback=cb&start=' + this.start + '&count=18&loc_id=0&_=1500791500208';
      };
      let callbackData = {
        param: 'callback',
        prefix: 'cb',
        name: 'cb',
        timeout: 1000
      };
      Jsonp(url,callbackData,(err,data)=>{
        this.lock = false;
        if(err){
          console.log(err);
          if(err == 'Error: Timeout'&&this.timeoutSum < 3){
            this.SendJsonp();
          }
          return ;
        };
        // console.log(data);
        if(waterFall){///这里需要根据api进行调整.
          this.bookInfo.subject_collection_items = this.bookInfo.subject_collection_items.concat(data.subject_collection_items);
          // console.log(this.bookInfo)
        }else{
          this.bookInfo = data;
          this.total = data.total;
        };
        for(let i=0;i < this.bookInfo.subject_collection_items.length;i++){
          if(!(this.bookInfo.subject_collection_items[i].actions[0])){
            this.bookInfo.subject_collection_items[i].actions[0] = false;
          };
          if(!(this.bookInfo.subject_collection_items[i].rating)){
            this.bookInfo.subject_collection_items[i].rating = {value: 0};
          };
        }
      });
    },
    FallsFlow(){
      this.scrollRoll = document.body.scrollTop;
      let getHeight = document.body.clientHeight - document.documentElement.clientWidth;
      if(getHeight - this.scrollRoll <= 300){
        if(!(this.$route.path.match(/bookRankList/g))){
          window.removeEventListener('scroll',this.FallsFlow);
        };
        this.SendJsonp(true);
      };
    }
  }
}
</script>
