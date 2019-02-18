import axios from "axios";

export const postAxios = (endpoint, data) => axios.post(endpoint, data);
