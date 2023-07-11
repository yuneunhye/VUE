<template>
    <div>
        <h1>글등록</h1>
        <label>제목 :
        <input type="text" v-model="data.post.title"/></label>
        <br/>
        <label>작성자 :
        <input type="text" v-model="data.post.author"/></label>
        <br/>
        <label>작성일</label>
        <input type="date" v-model="data.post.created_at">
        <br/>
        <label> 내용: </label>
        <br/>
        <textarea cols="25" rows="10" v-model="data.post.contents"></textarea>
        <br/>
        <button @click="savePost">저장</button>
        <button @click="reset">취소</button>
       
        
    </div>
</template>

<script setup>
import { reactive,  } from 'vue';
import axios from 'axios';

const data=reactive({
    post:{
         title: '',
        contents: '',
        author: '',
        created_at: new Date().toISOString().substring(0, 10)
    }
})

const savePost=()=>{
    console.log(data.post)
    axios.post('http://localhost:8090/api/post',{
        "title":data.post.title,
        "contents":data.post.contents,
        "author": data.post.author,
        "created_at":data.post.created_at
    })
    .then(()=>{
        console.log("success");
    })
}



 
</script>

<style></style>