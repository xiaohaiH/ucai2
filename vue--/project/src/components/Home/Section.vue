<template>
  <section  class="container-fluid">
       <router-link tag="article" class="row" v-for="(item,index) in data"  :key="item.id" :to="'/vueProject/note/'+data[index].target.id" :aa="data[index].id">
       <!-- <v class="row" v-for="(item,index) in page.sum" :key="item.id"> -->
       <div class="articleLeft col-xs-8 col-md-8">
        <p class="articleTitle">{{data[index].title}}</p>
        
        <p class="articleContent">{{data[index].target.desc}}</p>

        <p class="articleAuthor">{{data[index].target.author.name}}</p>
      </div>
      <div class="articleRight col-xs-4 col-md-4">
        <img class="img-responsive" :src="data[index].target.cover_url" />
        <span>{{data[index].source_cn}}</span>
      </div> 
     </router-link>    

  </section> 
</template>

<script>
  import Jsonp from 'jsonp'

  import '@/assets/css/Home/App.css'
  export default {
    name: 'section',
    data () {
      return {
        data: [],
        scroll: "",
        page: {
          year: "",
          month: "",
          date: "",
          sum: 0,
          lock: false
        }
      }
    },
    created () {
      const getNewDate = new Date();///获取日期的初始值.
      this.getArticle(getNewDate.getFullYear(),getNewDate.getMonth() + 1,getNewDate.getDate(),true);
    },
    methods: {
      getArticle(year,month,data,res){///获取数据.
      /* 这个是判断日期月份年是否在标准内  */
        if(data||month){
          this.page.year = year;
          this.page.month = month;
          this.page.date = data;
        }else{
          this.page.date -= 1;
          if(this.page.date <= 0){
            if(--this.page.month == 1|3|5|7|8|10|12){
              this.page.month -= 1;
              this.page.date = 31;
            }else if(--this.page.month == 4|6|9|11){
              this.page.month -= 1;
              this.page.date = 30;
            }else if(--this.page.month == 2){
              this.page.month -= 1;
              this.page.date = 28;
            }else{
              this.page.year -= 1;
              this.page.month = 12;
              this.page.date = 31;
            };
          };
        };
        /* 判断存储的值是否过期 */
        if(localStorage.getItem('homeData')){
          let nowDate = new Date().getDate();
          let formerly =  JSON.parse(localStorage.getItem('homeData')).timer;
          if(nowDate > formerly || nowDate == 1 && formerly != 1){
            localStorage.removeItem('homeData');
          };
        };
        /* 这个是判断日期月份年是否在标准内End */
        if(res && localStorage.getItem('homeData') && false){
          this.data = JSON.parse(localStorage.getItem('homeData'));
          return;
        }else{
          let url = "https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=" + this.page.year + "-"+ this.page.month +"-" + this.page.date + "&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1";
          Jsonp(url,{param:'callback',prefix:'cb',timeout: 1000,name:'cb'},(err,data) => {
            this.page.lock = false;
            if(err){
              console.log(err);
              if(err == 'Error: Timeout'){
                const getNewDate = new Date();///获取日期的初始值.
                this.getArticle(getNewDate.getFullYear(),getNewDate.getMonth() + 1,getNewDate.getDate(),true);
              }
              return false;
            };
            this.data = this.data.concat(data.recommend_feeds);
            if(res){
              this.data[0].timer = new Date().getDay();
              localStorage.setItem('homeData',JSON.stringify(this.data));
            };
          });
        }
      },
      ListenerScroll(){///监听滚动事件.
        /* 截流 */
        this.scroll = document.body.scrollTop;
        let getHeight = document.body.clientHeight - window.screen.availHeight - 400;
        if(this.scroll >= getHeight){
          if(this.page.lock){
            return;
          };
          this.page.lock = true;
          this.getArticle();
        }
      }
    },
    mounted(){
      window.addEventListener('scroll',this.ListenerScroll)
    }
  }
</script>
