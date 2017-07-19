<template>
  <div>
    <div>
      <item></item>
      <wenzhang></wenzhang>
    </div>
  </div>
</template>

<script>
/* item */
import Item from '@/components/Home/Item'
/* 文章数据 */
import Section from '@/components/Home/Section'

export default {
    name: 'home',
    // data(){
    //   return {
    //     msg : ''
    //   }
    // },
    components: {
        item: Item,
        wenzhang: Section
    }
}
</script>
