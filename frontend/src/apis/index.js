import axios from "axios";

export const BASE_URL = "http://j7c106.p.ssafy.io:8081";

export const API_COMMUNITY = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

export const ex = () => {};
