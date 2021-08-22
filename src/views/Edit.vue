<template>
  <div class="card card-body mt-4 mb-2">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Year</label>
        <input
          v-model="form.year"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBuku, updateBuku } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const bookID = computed(() => route.params.id)

    const form = reactive({ name: '', year: '' })
    onMounted(async () => {
      const book = await getBuku(bookID.value)
      console.log(book, bookID.value)
      form.name = book.name
      form.year = book.year
    })

    const update = async () => {
      await updateBuku(bookID.value, { ...form })
      router.push('/')
      form.name = ''
      form.year = ''
    }

    return { form, update }
  }
}
</script>
