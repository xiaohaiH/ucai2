<template>
  <div>
    <router-link to="/" tag="a" style="display:block;margin-top:100px;float:left;">你好</router-link>
     <p style="float:left;margin-top:100px;margin-left:300px;">{{msg}} </p>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data(){
      return {
        msg: "嘿嘿嘿"
      }
    }
  }  
</script>
