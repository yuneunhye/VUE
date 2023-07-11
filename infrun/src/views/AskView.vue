<template>
    <div id="container">
        <div v-for="(item, idx) in ask" :key="idx">
            {{ item.title }}
        </div>

    </div>
</template>
<script setup>
import { fetchAsksList } from '../api/index.js';
import { ref, onBeforeMount } from 'vue';

const ask = ref([])

onBeforeMount(() => {
    fetchAsksList()
        .then((res) => {
            console.log(res)
            ask.value = res.data;
        })
        .catch((err) => { console.log(err) });
})


</script>
<style scoped></style>