<template>
  <div class="container-fluid">
    <!-- 顶部 -->
    <div class="bookInfoBox">
      <h3>{{data.title}}</h3>
      <div class="row">
      <!-- 书籍作者评分信息 -->
        <div class="col-xs-7 col-sm-8 col-md-10 col-lg-11">
          <div class="bookGrade">
             <p><i :style="'background:url(/vueProject/static/img/starScore.png) no-repeat 0 ' + parseInt(10 - Math.round(data.rating.average)) * -11 + 'px'"></i>{{data.rating.average}}</p> 
             <span>{{data.rating.numRaters}}人评价</span> 
          </div>
          <div class="bookInfo">
             {{data.authors}} / {{data.translators}} / {{data.publisher}} / {{data.pages}}页 / {{data.binding}} / {{data.price}} / {{data.pubdate}} 
          </div>
        </div>
        <p class="col-xs-4 col-sm-2 col-md-2 col-lg-1">
           <img :src="data.images.large" class="img-responsive" /> 
        </p>

      </div>
      <!-- 是否阅读 -->
      <div class="row BookBtn">
        <p class=" col-xs-4  col-sm-4 col-md-4 col-lg-4"><button class="btn btn-info">想读</button></p>
        <p class=" col-xs-4  col-sm-4 col-md-4 col-lg-4"><button class="btn btn-info">在读</button></p>
        <p class=" col-xs-4  col-sm-4 col-md-4 col-lg-4"><button class="btn btn-info">在读</button></p>
      </div>
    </div>

    <!-- 书籍摘要和标签 -->
    <div class="bookAbstractAndTag">
      <div class="bookAbstract">
        <h4 class="bookAbstractTitle">{{data.title}}的内容简介</h4>
        <p>{{data.summary}}</p>
      </div>
      <div class="bookTag clearfix">
        <h4 class="bookAbstractTitle">{{'查看更多豆瓣高分好书'}}</h4>
        <p class="pull-left" v-for="(tags,index) in data.tags" :key="tags.id">{{tags.name}}</p>
      </div>
    </div>

    <!-- 书籍短评 -->
    <div class="bookShortCommentBox">
       <h4 class="bookAbstractTitle">{{data.title}}的短评({{comments.total}})</h4> 
      <div class="bookShortComment">
        <!-- 单个短评模块 -->
        <div class="articleMessage" v-for="(comment,index) in comments.interests" :key="comment.id">
           <div class="media articleMessageContent">
            <div class="col-xs-3 col-sm-3 col-md-1 col-lg-1">
                <router-link :to="'/vueProject/author/' + comment.user.id" tag="a">
                  <img class="media-object img-responsive" :src="comment.user.avatar" alt="">  
              </router-link>
            </div>
             <div class="media-body">
              <div class="clearfix commentTitleAnthor">
                 <h4 class="media-heading pull-left">{{comment.user.name}}</h4> 
                  <i class="pull-left" :style="'background:url(/vueProject/static/img/starScore.png) no-repeat 0 ' + parseInt(10 - Math.round(comment.rating.value)) * -11 + 'px'"></i>  
              </div>
                <p>{{comment.create_time}}</p>  
                <p>{{comment.comment}}</p>     
            </div>
          </div>
        </div>

      </div>
      <!-- 短评翻页按钮 -->
      <div class="articleMessagebtn clearfix">
        <p class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button ref="prevPage" @click="getCommentData('prev')" type="button" class="btn btn-default">上一页</button>
        </p>
        <p class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button ref="nextPage" @click="getCommentData('next')" type="button" class="btn btn-default">下一页</button>
        </p>
      </div> 
    </div>
  </div>
</template>

<script>
/* 引入样式 */
import '@/assets/css/BookIntroduce/BookIntroduce.css'

import Jsonp from 'jsonp'
export default {
  name: 'bookIntroduce',
  data(){
    return {
      data: {
        rating: {},
        images: {}
      },
      comments: {
        // total: 7
      },
      start: 0,
      Num: ''
    }
  },
  created(){
      this.Num = this.$route.fullPath.match(/[0-9]+/g)[0];
        this.getData();
      this.$nextTick(()=>{
        this.getCommentData();
        // console.log(this.data)
      });
  },
  methods: {
    getData(){///获取书籍的信息简介.
      // this.data = JSON.parse(localStorage.getItem('b'));
      // console.log(this.data)
      // return;
      let url = 'https://api.douban.com/v2/book/' + this.Num;
      let callbackData = {
        param: 'callback',
        prefix: 'cb',
        prefix: 'cb'
      };
      Jsonp(url,callbackData,(err,data)=>{
        if(err){
          console.log(err);
          return ;
        };
        let arr = [];
        for(let i = 0;i < data.author.length;i++){
          arr.push(data.author[i]);
        };
        data.authors = arr.join('/');
        arr = [];
        for(let i = 0;i < data.translator.length;i++){
          arr.push(data.translator[i]);
        };
        data.translators = arr.join('/');
        this.data = data;
        // console.log(data)
        // localStorage.setItem('b',JSON.stringify(data));
      });
    },
    getCommentData(page){///获取该书籍短评的内容.
      // this.comments = JSON.parse(localStorage.getItem('c'));
      // console.log(this.comments);
      // return;
      /* 判断评论是否高于最高 或 低于最低 */
      if(page){
        if(page == 'prev'){
          this.$refs.nextPage.disabled = false;
          if(this.start <= 0){
            this.$refs.prevPage.disabled = true;
            return ;
          };
          this.start -= 6;
          if(this.start <= 0){
            this.start = 0;
          };
        }else if(page == 'next'){
          this.$refs.prevPage.disabled = false;
          if(this.start >= this.comments.total){
            this.$refs.nextPage.disabled = true;
            return ;
          };
          this.start += 6;
          if(this.start >= this.comments.total){
            this.start = this.comments.total;
          };
        };
      };


      let url = 'https://m.douban.com/rexxar/api/v2/book/' + this.Num + '/interests?count=6&order_by=hot&start=' + this.start + '&ck=&for_mobile=1';
      let callbackData = {
        param: 'callback',
        prefix: 'cb',
        name: 'cb'
      };
      Jsonp(url,callbackData,(err,data)=>{
        if(err){
          console.log(err);
          return;
        };
        /* 判断评论评分是否存在 */
          for(let i=0;i < data.interests.length;i++){
            if(!(data.interests[i].rating)){
              data.interests[i].rating = {value: 0};
            };
          };
        /* 判断评论评分是否存在 */
        this.comments = data;
        // console.log(data);
      });
    }
  }
}
</script>

<style>
  
</style>
