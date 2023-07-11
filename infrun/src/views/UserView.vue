<template>
    <div id="container">

    </div>
</template>
<script setup>
import axios from 'axios';
import {onMounted} from 'vue';
import {  useRoute } from 'vue-router'


const route = useRoute()


onMounted(()=>{
    console.log(route.params.id);
})


</script>
<style scoped>
</style>