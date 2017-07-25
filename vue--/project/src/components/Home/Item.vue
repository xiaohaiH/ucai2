<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-6 col-md-3 col-sm-3 col-lg-3">
        <div class="navItem">
          <router-link to="/vueProject/" tag="a">影院热映</router-link>
        </div>
      </div>
      <div class="col-xs-6 col-md-3 col-sm-3 col-lg-3">
        <div class="navItem">
          <router-link to="/vueProject/" tag="a">近期值得看的国产剧</router-link>
        </div>
      </div>
      <div class="col-xs-6 col-md-3 col-sm-3 col-lg-3">
        <div class="navItem">
          <router-link to="/vueProject/" tag="a">豆瓣时间</router-link>
        </div>
      </div>
      <div class="col-xs-6 col-md-3 col-sm-3 col-lg-3">
        <div class="navItem">
          <router-link to="/vueProject/" tag="a">使用豆瓣App</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/Home/App.css'
  export default {
    name: 'item'
  }
</script>

