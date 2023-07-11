<template>
    <div id="container">
        <p  v-for="(job, idx) in jobs" :key="idx">
              <a :href="job.url">
                  {{ job.title }}
              </a>
              <small>{{ job.domain }}</small>
          </p>
    </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue';
import { useIndexStore } from '../stores/index.js'
const store = useIndexStore();
const {jobs}=store


onBeforeMount(() => {
  store.FETCH_JOBS()
})
</script>
<style scoped>

</style>