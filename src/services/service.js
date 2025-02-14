import axios from 'axios';
axios.defaults.baseURL = 'http://apitry.personalhealth.com.cn'
export function ipInfo() {
  return axios.get('http://ip-api.com/json');
}
export function query ({codes, lang = 'en'}) {
  return axios.get(`/uc/api/iatadatabase/query?codes=${codes}&lang=${lang}`)
}

export const login = (params)=> {
  return axios.post('/uc/api/userAdmin/login',params)
}

export const search = (params)=>{
  return axios.get('/uc/api/dataResult/getTestUserResult',{params:params})
}

export const authInfo = (params) =>{
  return axios.get('/wxSigns/wx/Oauth',{params:params});
}

export const userInfo = params => {
  return axios.get("/uc/api/testUser/getTestUser", { params: params });
};

export const getUsers = (params) =>{
  return axios.get('/uc/api/testUser/list?openid=');
}