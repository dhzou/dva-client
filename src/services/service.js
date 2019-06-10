import axios from 'axios';
axios.defaults.baseURL = 'http://apitry.personalhealth.com.cn/uc/api'
export function ipInfo() {
  return axios.get('http://ip-api.com/json');
}
export function query ({codes, lang = 'en'}) {
  return axios.get(`/iatadatabase/query?codes=${codes}&lang=${lang}`)
}

export const login = (params)=> {
  return axios.post('/userAdmin/login',params)
}

export const search = (params)=>{
  return axios.get('/dataResult/getTestUserResult',{params:params})
}
