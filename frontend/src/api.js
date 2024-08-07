import axios from "axios";

const api = axios.create({
  baseURL: process.env.PORT || 'https://exploramaranhaback.onrender.com/api'
});

export default api;
