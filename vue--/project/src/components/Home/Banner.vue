<template>
    <!-- 导航条Start -->
  <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
            <router-link id="logo" to="/vueProject/" tag="a" class="navbar-brand">星空</router-link>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-left">
            <li><router-link class="movie navKind" exact to="/vueProject/movie" tag="a">电影 <span class="sr-only">(current)</span></router-link></li>
            <li><router-link class="book navKind" exact to="/vueProject/book" tag="a">图书</router-link></li>
            <li><router-link class="broadcast navKind" exact to="/vueProject/broadcast" tag="a">广播</router-link></li>
            <li><router-link class="group navKind" exact to="/vueProject/group" tag="a">小组</router-link></li>
          </ul> 
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="button" class="btn btn-default">搜索</button>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
  </nav>
    <!-- 导航条End -->
</template>

<script>
  import '@/assets/css/Home/App.css'
  export default {
    name: "banner"
  }
</script>
