<template>
  <div>
    <h1>这个是初始页面</h1>

    <router-link to="/" tag="a">首页</router-link>
    <router-link to="/introduce" tag="a">个人介绍</router-link>
    <router-view name="follow"></router-view>
    <router-view name="details"></router-view>
    <router-view></router-view>

  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>