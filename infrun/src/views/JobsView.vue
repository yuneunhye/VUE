<template>
    <div id="container">
        <div v-for="(job, idx) in jobs" :key="idx">
                {{ job.title }}
        </div>
    </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue';
import { useIndexStore } from '../stores/index.js'
const store = useIndexStore();
const {jobs}=store


onBeforeMount(() => {
  store.FETCH_JOBS
})
</script>
<style scoped>

</style>