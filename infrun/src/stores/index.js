import { ref, } from 'vue'
import { defineStore } from 'pinia'
import { fetchNewsList,fetchJobsList,fetchAsksList,fetchUserDetail,fetchTitleDetail } from '../api/index.js';
export const useIndexStore = defineStore('index', () => {
  
  const news = ref([])
  const jobs = ref([])
  const asks = ref([])
  const user=ref([])
  const askTitleView=ref([])
  
  function FETCH_NEWS() {
    fetchNewsList()
    .then((res)=>{
       news.value=res.data;
        
    })
  }

  function FETCH_JOBS() {
    fetchJobsList()
    .then((res)=>{
       jobs.value=res.data;
        
    })
  }

  function FETCH_ASKS() {
    fetchAsksList()
    .then((res)=>{
       asks.value=res.data;
        
    })
  }

  function FETCH_USER(userid){
    fetchUserDetail(userid)
    .then((res)=>{
      console.log(res);
      user.value=res.data;
    })
  }

    function FETCH_ASKTITLEVIEW(titleid){
    fetchTitleDetail(titleid)
    .then(({data})=>{
      askTitleView.value=data;
    })
  }

   function FETCH_LISTITEM(titleid){
    fetchTitleDetail(titleid)
    .then(({data})=>{
      askTitleView.value=data;
    })
  }



  return { news,jobs,asks,user,askTitleView, FETCH_NEWS,FETCH_JOBS,FETCH_ASKS,FETCH_USER,FETCH_ASKTITLEVIEW,FETCH_LISTITEM}
})
