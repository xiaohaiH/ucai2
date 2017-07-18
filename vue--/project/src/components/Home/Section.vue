<template>
  <section class="container-fluid">
      <article class="row" v-for="(item,index) in data.recommend_feeds" :key="item.id">
       <div class="articleLeft col-xs-8 col-md-8">
        <p class="articleTitle">{{data.recommend_feeds[index].title}}</p>
        <p class="articleContent">{{data.recommend_feeds[index].target.desc}}</p>
        <p class="articleAuthor">{{data.recommend_feeds[index].target.author.name}}</p>
      </div>
      <div class="articleRight col-xs-4 col-md-4">
        <img class="img-responsive" :src="data.recommend_feeds[index].target.cover_url" />
      </div> 
     </article>   
  </section> 
</template>

<script>
  import Jsonp from 'jsonp'

  import '@/assets/css/App.css'
  export default {
    name: 'section',
    data () {
      return {
        data: {}
      }
    },
    created () {
      this.getArticle();
    },
    methods: {
      getArticle(){
        let month = '07';
        let date = '18';
        let url = "https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=2017-"+ month +"-" + date + "&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1";
        Jsonp(url,{param:'callback',prefix:'cb',name:'cb'},(err,data) => {
          if(err){
            console.log(err);
            return false;
          };
          this.data = data;
          console.log(this.data)
        });
      }
    }
  }
</script>