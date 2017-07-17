<template>
  <div>
      <h1>姓名</h1>
      <span>肖海东</span>
      {{msg}}
  </div>
</template>

<script>
    export default {
        name: 'IntroduceName',
        data(){
            return {
                msg: "个人信息"
            }
        }
    }
</script>