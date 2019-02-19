import axios from "axios";

const BASE_URL = "https://ah-alpha.herokuapp.com/api/v1/";

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
export default axiosConfig;
