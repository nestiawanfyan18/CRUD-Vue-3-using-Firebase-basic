<template>
  <BookCreate />
  <BookList />
</template>

<script>
import BookCreate from '../components/BookCreate.vue'
import BookList from '../components/BookList.vue'

export default {
  name: 'Home',
  components: { BookCreate, BookList }
}
</script>
