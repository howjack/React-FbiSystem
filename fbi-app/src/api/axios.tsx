import axios from "axios";

let baseURL;

if(process.env.NODE_ENV !== "production"){
    baseURL = 'http://localhost:6007/'
}else{
    baseURL = 'https://fbi-system-api.herokuapp.com/'
}

const api = axios.create({
    baseURL: baseURL,
    timeout: 1000,
}); 

export default api;