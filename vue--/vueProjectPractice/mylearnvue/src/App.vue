<template>
  <div>
      <h1>test</h1>
      <router-link to="/heiheihei" tag="a">邓超</router-link>
      <p>配置</p>
      <p>{{msg}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'fda',
        data(){
            return {
                msg : '试验配置文件'
            }
        }
    }
</script>
