<template>
    <div id="container">
        <p>유저정보</p>
        <p>name : {{ user.id }}</p>
        <p>karma : {{ user.karma }}</p>
        <p>created : {{ user.created }}</p>
        
    </div>
</template>
<script setup>

import {onMounted} from 'vue';
import {  useRoute } from 'vue-router'
import { useIndexStore } from '../stores/index.js';

const store = useIndexStore();
const { user, } = store

const route = useRoute()


onMounted(()=>{
    const userid= route.params.id
    store.FETCH_USER(userid);
    
})


</script>
<style scoped>
</style>