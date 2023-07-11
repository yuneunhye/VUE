<template>
    <div id="container">
       <div v-for="(item,idx) in news" :key="idx">
        {{ item.title }}
       </div>
    </div>
</template>
<script setup>
import {ref, onBeforeMount } from 'vue';
import { useIndexStore } from '../stores/index.js'
const store= useIndexStore();
const { news , getNews }= store


onBeforeMount(() => {
     store.FETCH_NEWS()
})
   



</script>
<style scoped>
</style>