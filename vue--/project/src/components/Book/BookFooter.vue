<template>
  <div class="ClassifyFooterBox">
    <div class="ClassifyFooter">
      <p>
        <img class="img-responsive" src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" />
      </p>
      <div>
        <h4>星空</h4>
        <p>我们的精神角落</p>
      </div>
    </div>
    <router-link class="down" to="/xiazai" tag="div">
      免费下载Android客户端
    </router-link>
  </div>
</template>

<script>
  import '@/assets/css/Book/BookFooter.css'
  export default {
    name: 'bookfooter'
  }
</script>
