<template>
    <div id="container">
        <ul>
        <li v-for="(item, idx) in data" :key="idx" class="post">
            <div class="point">{{ item.points }}</div>
            <div>
                <a :href="item.url">
                    {{ item.title }}
                </a>
                <small>{{ item.time_ago }} by
                    <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
                </small>
            </div>
        </li>
        </ul>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { useIndexStore } from '../stores/index.js'
import { computed } from 'vue';
const store = useIndexStore();
const { news,asks,jobs } = store

const route=useRoute();
const name=route.name;
console.log(route.name);


if(name ==='news'){
    store.FETCH_NEWS();
}else if(name==='ask'){
    store.FETCH_ASKS();
}else if(name==='jobs'){
    store.FETCH_JOBS()
}

const data=computed(()=>{
    if (name === 'news') {
        return news;
    } else if (name === 'ask') {
        return asks;
    } else if (name === 'jobs') {
        return jobs;
    }else{
        return null;
    }
})




</script>
<style scoped>
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
}

.point {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>