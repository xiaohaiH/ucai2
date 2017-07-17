<template>

  <div class="app">
      <!--导航-->
    <nav class="navbar navbar-default">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <!--当你切换到移动端或屏幕比较小的时候显示的logo-->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
                <!--显示在页面的logo-->
                <a class="navbar-brand" href="#">FE7</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">首页 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">学习</a></li>
                    <li><a href="#">论坛</a></li>
                    <li><a href="#">博客</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">二级导航 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">用户信息 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">用户资料</a></li>
                            <li><a href="#">个人积分</a></li>
                            <li><a href="#">购买的东西</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">登出</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <p>
      <!-- 这样写会刷新整个页面 -->
      <!-- <a href="/home">one</a>
      <a href="/homepage">two</a>
      <a href="/introduce">three</a> -->
    </p>
    <!-- 这个替代a标签，刷新是局部刷新 -->
    <router-link to="/home">one</router-link>
    <router-link to="/homepage">two</router-link>
    <router-link to="/introduce">three</router-link>
    <!-- 加个tag='指定标签'，设置成指定的标签 -->
    <router-link to="/introduce" tag="li">three</router-link>
    <!-- 设置事件 -->
    <!-- <router-link to="/introduce" tag="li" event="mouseover">three</router-link> -->
    <router-link to="/introduce" tag="li">three</router-link>
    <!-- 显示的位置 -->
    <router-view></router-view>
    <router-view name="test" style="margin-top:100px;"></router-view> 
  </div>
</template>


<script>
export default {
  name: 'app',
  data(){
    return {
      msg: "这个应该可以不写吧"
    }
  }
}
</script>


<style>
.app{
    background: darkviolet;
    height: 200px;
    width: 600px;
}
a{
    color:yellowgreen;
    text-decoration:none;
}
p a{
  margin:0 10px;
}
span{
    margin-right:10px;
    letter-spacing:1px;
}
</style>
