import axios from "axios";

export const BASE_URL = "";

export const API_ACCOUNT = axios.create({
  baseURL : BASE_URL,
  headers: {
    "Authorization": localStorage.token
  }
});

export const API_COMMUNITY = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_NOTICE = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});

export const API_MYPAGE = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": localStorage.token,
    "Access-Control-Allow-Origin" : '*',
  }
});


export const ex = () => {};
