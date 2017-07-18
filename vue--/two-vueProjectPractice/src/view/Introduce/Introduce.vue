<template>
  <div :msg="msg">
      <h1>这个是个人介绍详情</h1>
      <p>个人介绍。。。。。。。。。。。</p>
      <p>个人介绍。。。。。。。。。。。</p>
      <p>个人介绍。。。。。。。。。。。</p>
      <p>个人介绍。。。。。。。。。。。</p>
      <p>个人介绍。。。。。。。。。。。</p>
      {{msg}}
      <test></test>
  </div>
</template>


<script>
import test from '@/components/Test'
    export default {
        name: 'introduce',
        data () {
            return {
                msg: '你好啊'
            }
        },
        components:{
            props: ['msg'],
            test: test,
        }
    }
</script>
