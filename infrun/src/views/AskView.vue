<template>
    <div id="container">
        <div v-for="(item, idx) in asks" :key="idx">
            {{ item.title }}
        </div>

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