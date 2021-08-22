<template>
  <div class="card mt-4" style="margin-top: 50px">
    <hr>
    <h2> Data Table </h2>

    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Year</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, year } in bukus" :key="id">
          <td>{{ name }}</td>
          <td>{{ year }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button style="margin-left: 10px" class="btn btn-danger btn-sm" @click="deleteBuku(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadBukus, deleteBuku } from '@/firebase'

export default {
  setup() {
    const bukus = useLoadBukus()
    return { bukus, deleteBuku }
  }
}
</script>
