import { ref, } from 'vue'
import { defineStore } from 'pinia'
import { fetchNewsList,fetchJobsList,fetchAsksList } from '../api/index.js';
export const useIndexStore = defineStore('index', () => {
  
  const news = ref([])
  const jobs = ref([])
  const asks = ref([])
  
  function FETCH_NEWS() {
    fetchNewsList()
    .then((res)=>{
        console.log(res);
       news.value=res.data;
        
    })
  }

  function FETCH_JOBS() {
    fetchJobsList()
    .then((res)=>{
        console.log(res);
       jobs.value=res.data;
        
    })
  }

  function FETCH_ASKS() {
    fetchAsksList()
    .then((res)=>{
        console.log(res);
       asks.value=res.data;
        
    })
  }



  return { news,jobs,asks, FETCH_NEWS,FETCH_JOBS,FETCH_ASKS}
})
