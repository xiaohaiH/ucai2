<template>
  <div>
    <bookfiction></bookfiction>
  </div>
</template>

<script>
  import bookFiction from '@/components/Book/BookFiction.vue'
  export default {
    name: 'book',
    components: {
      bookfiction: bookFiction
    }
  }
</script>