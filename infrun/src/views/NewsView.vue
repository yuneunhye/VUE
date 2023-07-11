<template>
    <div id="container">
        <p  v-for="(item, idx) in news" :key="idx">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>{{item.time_ago }} by 
                <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
            
        </p>
    
    </div>
</template>
<script setup>
import {ref, onBeforeMount, } from 'vue';
import { useIndexStore } from '../stores/index.js'
const store= useIndexStore();
const { news ,  }= store

onBeforeMount(() => {
     store.FETCH_NEWS()
})

</script>
<style scoped>
</style>