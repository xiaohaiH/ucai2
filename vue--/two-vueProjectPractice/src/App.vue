<template>
  <div>
      <router-link to="/">首页</router-link>
      <router-link to="/introduce">个人介绍</router-link>
      <router-link to="/introduceName">个人介绍分页</router-link>
      <h1>Practice</h1>
      <p>two Practice</p>
      {{msg}}
      <!-- <router-view name="default"></router-view>  -->
      <router-view>fdsafd</router-view>
      <router-view name="IntroduceName"></router-view> 
  </div>
</template>

<script>
    export default{
        name: 'App',
        data(){
            return {
                msg: "随便定义一个值"
            }
        }
    }
</script>
