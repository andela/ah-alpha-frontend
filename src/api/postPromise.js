import axios from "axios";

const postAxios = (endpoint, data) => axios.post(endpoint, data);

export default postAxios;
