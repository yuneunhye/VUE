import axios from "axios";

//HTTP Rquest & Response 와 관련된 기본 설정 먼저
const config={
    baseUrl:'https://api.hnpwa.com/v0/'
}

function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`)
}


function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`)
}


function fetchAsksList(){
    return axios.get(`${config.baseUrl}ask/1.json`)
}



export { fetchNewsList,fetchJobsList,fetchAsksList}