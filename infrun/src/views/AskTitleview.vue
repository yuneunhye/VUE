<template>
    <div id="container">
        {{ askTitleView }}
        <div v-html="askTitleView "></div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { useIndexStore } from '../stores/index.js';
import { reactive } from 'vue';

const store = useIndexStore();
const { askTitleView } = store
const route = useRoute()


const titleId=route.params.id;
     store.FETCH_ASKTITLEVIEW(titleId);



const data={id : 1}
const reactiveData = reactive(data);
const proxyData = new Proxy(data);

data === reactiveData //true
data === proxyData //false

</script>
<style scoped></style>