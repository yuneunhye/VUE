<template>
    <div id="container">
         <p  v-for="(item, idx) in asks" :key="idx">
                  <a :href="item.url">
                      {{ item.title }}
                  </a>
                  <small>{{ item.time_ago }} by {{ item.user }}</small>
              </p>

    </div>
</template>
<script setup>

import { ref, onBeforeMount } from 'vue';
import { useIndexStore } from '../stores/index.js'
const store = useIndexStore();
const {asks} =store;


onBeforeMount(() => {
    store.FETCH_ASKS()
})


</script>
<style scoped></style>