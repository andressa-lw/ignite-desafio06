import axios from 'axios';

const api = axios.create({
  baseURL: "https://ignite-desafio06.vercel.app/",
});

export default api;