<template>
  <div class="container-fluid">
    <div class="articleTitle">
       <h3>{{msg.title}}</h3>
       <p><router-link :to="'/author/' + msg.author.id" tag="a">{{msg.author.name}}</router-link><span>{{msg.publish_time}}</span></p>
    </div>
    <div class="articleContent">
      <p v-for="(essay,i) in msg.content.blocks" :key="essay.id"> 
      {{essay.text}} 
      </p>  
    </div>
    <div class="articleAuthor">
      <div class="media">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-1">
           <!-- img-responsive -->
          <img class="img-responsive" :src="msg.author.large_avatar" alt="">
        </div>
        <div class="media-body">
          <p><span>作者  ：</span><span>{{msg.author.name}}</span></p> 
            <p><span>{{83}}  日记</span><i>·</i><span>{{6}}  相册</span></p>  
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="articleMessageBox">
      <div class="articleMessage">
        <h3 class="articleMessageTitle">全部评论{{comments.total}}条</h3>
        <div class="media articleMessageContent" v-for="(comment,j) in comments.comments" :key="comment.id">
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-1">
            <router-link :to="'/' + comment.id" tag="a">
              <img class="media-object img-responsive" :src="comment.author.large_avatar" alt="">
            </router-link>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{comment.author.name}}</h4> 
            <p>{{comment.created}}</p> 
            <p>{{comment.content}}</p>
          </div>
        </div>
      </div>
      <div class="articleMessagebtn">
        <button ref="prevPage" @click="commentJsonp(10)" type="button" class="btn btn-block btn-default col-md-4">上一页</button>
        <button ref="nextPage" @click="commentJsonp()" type="button" class="btn btn-block btn-default col-md-4">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Jsonp from 'jsonp'
/*  */
  import '@/assets/css/Note/Note.css'

  export default {
    name: 'note',
    data(){
      return {
        msg: {
          author:{
            id: 1
          },
          content:{
            blocks: 0
          }
        },
        comments: "",
        messageCount: 10,
        messageStart: 0,
        messageTotal: 10,
        lock: false
      }
    },
    created(){
      this.$nextTick(function(){
        this.sendJsonp();
        this.commentJsonp();        
      });
      // this.commentJsonp();
    },
    methods: {
      sendJsonp(){
        let getId = window.location.pathname.match(/([0-9]+)/g)[0];
        let url = 'https://api.douban.com/v2/note/' + getId + "?apikey=0b2bdeda43b5688921839c8ecb20399b";
        Jsonp(url,{param:'callback',prefix:'cb',name:'cb'},(err,data)=>{
          if(err){
            console.log(err);
            return;
          };
          this.msg = data;
          this.msg.content = JSON.parse(data.content);
        });
      },
      commentJsonp(start,count){
        if(this.lock){///截流.
          return;
        };
        /* 这种是通过js控制按钮控件是否禁用 */
        this.lock = true;
        if(start||count){///检测点击是上一页还是下一页.
          this.messageStart -= 10;
          this.messageCount = count;
          if(this.messageStart<=0){
            this.messageStart = 0;
          }
        };
        /* 上一页按钮低于0禁用 */
        if(this.messageStart <= 0){
          this.$refs.prevPage.disabled = true;
        }else{
          this.$refs.prevPage.disabled = false;
        }; 
        /* 下一页按钮超出禁用 */
        if(this.messageStart >= this.messageTotal){
          this.$refs.nextPage.disabled = true;
        }else{
          this.$refs.nextPage.disabled = false;
        };

        let getId = window.location.pathname.match(/([0-9]+)/g)[0];
        let url = "https://api.douban.com/v2/note/" + getId + "/comments?start=" + this.messageStart + "&count=" + this.messageCount + "&apikey=0b2bdeda43b5688921839c8ecb20399b";
        Jsonp(url,{param:'callback',prefix:'cm',name:'cm'},(err,data)=>{
          this.lock = false;
          if(err){
            console.log(err)
            return;
          };
          this.comments = data;
          this.messageTotal = data.total
        });
        if(!(start||count)){
          this.messageStart += 10;
        }
      }
    }
  }
</script>
