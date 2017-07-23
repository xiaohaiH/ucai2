<template>
  <div>
     <bookFiction></bookFiction>
    <bookNonFiction></bookNonFiction>  
    <bookShop></bookShop>  
    <FindBook></FindBook>     
    <Classify></Classify>   
    <BookFooter></BookFooter>   
  </div>
</template>

<script>
/* 组件 */
  import bookFiction from '@/components/Book/BookFiction.vue'
  import bookNonFiction from '@/components/Book/bookNonFiction.vue'
  import bookShop from '@/components/Book/bookShop.vue'
  import FindBook from '@/components/Book/FindBook.vue'
  import Classify from '@/components/Book/Classify.vue'
  import BookFooter from '@/components/Book/BookFooter.vue'
  export default {
    name: 'book',
    components: {
      bookFiction,
      bookNonFiction,
      bookShop,
      FindBook,
      Classify,
      BookFooter
    }
  }
</script>