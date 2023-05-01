import axios from "axios";
const axiosClientinstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosClientinstance;
