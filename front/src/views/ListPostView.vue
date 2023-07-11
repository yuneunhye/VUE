<template>
    <div>
        <h1>글목록</h1>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

const getList=onMounted(() => {
    axios.get('/api/list')
        .then((res) => {
            console.log(res);
        })
})

</script>

<style></style>