// import axios from 'axios'

// TODO: 封装为方法 
function getDiseaseData(){
  axios({
    method: 'get',
    url: 'http://localhost:8001/wwz/diseaseController/all',
  }).then(function(repos){
    console.log(repos)
    return repos;
  }).catch(function(error){
    console.log(error);
  })
}