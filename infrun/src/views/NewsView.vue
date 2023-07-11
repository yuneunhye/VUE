<template>
    <div id="container">
       <div v-for="(user,idx) in users" :key="idx">
        {{ user.title }}
       </div>
    </div>
</template>
<script setup>
import { fetchNewsList } from '../api/index.js';
import {ref, onBeforeMount } from 'vue';

const users=ref([])

onBeforeMount(() => {
     fetchNewsList()
        .then((res) => {
            console.log(res)
            users.value = res.data;
        })
        .catch((err) => { console.log(err) });
})
   



</script>
<style scoped>
</style>