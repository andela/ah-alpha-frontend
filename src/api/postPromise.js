import axios from "axios";

// eslint-disable-next-line
export const postAxios = (endpoint, data) => axios.post(endpoint, data);
