<template>
    <div id="container">
        <div v-for="(job, idx) in jobs" :key="idx">
                {{ job.title }}
        </div>
    </div>
</template>
<script setup>
import { fetchJobsList } from '../api/index.js';
import { ref, onBeforeMount } from 'vue';

const jobs = ref([])

onBeforeMount(() => {
    fetchJobsList()
        .then((res) => {
            console.log(res)
            jobs.value = res.data;
        })
        .catch((err) => { console.log(err) });
})
</script>
<style scoped>

</style>