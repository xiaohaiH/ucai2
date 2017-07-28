<template>
  <div class="container-fluid">
    <!-- content 内容 -->
    <div class="Box">
      <router-link tag="div" :to="'/vueProject/note/'+ item.boradcastId" class="broadcastBox" v-for="(item,index) in msg" :key="item.id">
        <!-- title -->
        <div class="media row broadcastTitle"> 
          <div class="media-left col-xs-2 col-sm-2 col-md-1 col-lg-1">
            <router-link to="/vueProject/id" tag="a">
              <img class="img-responsive" :src="item.status.author.avatar" alt="">
            </router-link>
          </div>
          <div class="media-body boradcastContent">
            <div>
              <!-- <h4 class="media-heading">{{item.status.author.name}}</h4> -->
              <h4 class="media-heading">星空</h4>
              <span>{{item.status.activity}}</span>
            </div>
            <p><time>{{item.status.create_time}}</time></p>
          </div>
        </div> 
        <!-- broadcast content -->
        <div>
          <div class="panel panel-success">
              <div class="panel-heading">{{item.status | prot('title')}}</div>  
            <div class="panel-body row">
              <p class="col-xs-8 col-sm-8 col-md-9 col-lg-11">{{item.status | prot('subtitle')}}</p>
              <router-link :to="'/vueProject/note/'+ item.boradcastId" tag="a" class="col-xs-4 col-sm-4 col-md-3 col-lg-1">
                <img :src="item.status | prot('large')" class="img-responsive" />
                </router-link>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 分页按钮 -->
    <nav>
      <ul class="pager">
        <li><button class="btn-info btn" @click="sendJsonp(10)">上一页</button></li>
        <li><button class="btn-info btn" @click="sendJsonp()">下一页</button></li>
      </ul>
    </nav>
    <!-- 分页按钮 -->
    <div class="broadcastFooterBox">
      <div class="broadcastFooter">
        <p>
          <img class="img-responsive" src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" />
        </p>
        <div>
          <h4>星空</h4>
          <p>在App中刷广播更愉快</p>
        </div>
      </div>
      <router-link class="down" to="/vueProject/xiazai" tag="div">
        免费下载Android客户端
      </router-link>
    </div>

  </div>
</template>
<script>
/* api过滤 */
  import Vue from 'vue'
  Vue.filter('prot',function(data,sign){
    if(data.card){
      if(sign == 'large'){
        if(data.card.image){
          return data.card.image[sign].url;
        };
      };
      return data.card[sign];
    }else{
      if(sign == 'title'){
        return data.entities[0][sign];
      }else if(sign == 'subtitle'){
        return data['text'];
      }else if(sign == 'large'){
        if(data.images){
          return data.images[0][sign].url;
        };
      }
    };
  });
/* api过滤 */
/* 样式引入*/
import '@/assets/css/Broadcast/Broadcast.css'
/* 样式引入 */
  import Jsonp from 'jsonp'



  export default {
    name: 'BroadcastContent',
    data(){
      return {
        msg: ''
      }
    },
    created(){
      this.$nextTick(function(){
        this.sendJsonp();
      });
    },
    methods: {
      sendJsonp(){
        let url = 'https://m.douban.com/rexxar/api/v2/status/anonymous_timeline?max_id=1978907078';
        let callBack = {};
        Jsonp(url,callBack,(err,data)=>{
          if(err){
            console.log(err);
            return;
          };
          console.log(data);
          this.msg = data.items;
          for(let i=0;i < data.items.length;i++){
            if(data.items[i].status.card){
              this.msg[i].boradcastId = data.items[i].status.card.uri.match(/[0-9]+/g)[0];
            }else{
              this.msg[i].boradcastId = '数据不存在';
            }
          };
        });
      }
    }
  }
</script>
