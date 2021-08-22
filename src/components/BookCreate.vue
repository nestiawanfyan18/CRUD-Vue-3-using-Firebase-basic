<template>
    <div class="float-left mt-4">
        <form @submit.prevent="onSubmit" class="float-left">
            <div class="form-group">
                <label style="text-align:center !important;">Nama Buku</label>
                <input v-model="form.name" class="form-control" required /> 
            </div>

            <div class="form-group">
                <label>Tahun Terbit Buku</label>
                <input v-model="form.year" class="form-control" required /> 
            </div>

            <button type="submit" class="btn btn-success mt-3">
                Tambah Data
            </button>
        </form>
    </div>
</template>

<script>
    import { createBuku } from '@/firebase.js'
    import { reactive } from 'vue'

    export default {
        setup() {
            const form = reactive({ name: '', year: '' })
            const onSubmit = async() => {
                await createBuku({ ...form })
                form.name = ''
                form.year = ''
            }

            return { form, onSubmit }
        }
    }

</script>