import axios from "axios";

const api = axios.create({
  baseURL: 'https://exploramaranhaback.onrender.com/api'
});

export default api;
