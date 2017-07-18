<template>
    <div>
        <Banner></Banner>
        <div id="content">
            <item></item>
            <wenzhang></wenzhang>
        </div>
    </div>
</template>



<script>
/* banner条 */
import Banner from '@/components/Home/Banner'
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
        Banner: Banner,
        item: Item,
        wenzhang: Section
    }
}
</script>
