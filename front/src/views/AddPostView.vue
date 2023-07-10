<template>
    <div>
        <h1>글등록</h1>
        <label>제목 :
        <Input :value="title"/></label>
        <label>작성자 :
        <Input :value="author"/></label>
        <label>작성일</label>
        <input type="date" v-model="post.created_at">
        <br/>
        <label> 내용: </label>
        <br/>
        <textarea cols="25" rows="10" v-model="contents"></textarea>
       
        
    </div>
</template>

<script setup>
import Input from '@/components/board/input.vue';
import {ref,onMounted} from 'vue';

const post = ref({
    title:'', 
    contents:'',
    author:'', 
    created_at:new Date().toISOString().substring(0, 10)
})



 
</script>

<style></style>