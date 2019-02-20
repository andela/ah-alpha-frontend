import axios from "axios";

const token = localStorage.getItem("token");
const urlPath = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${token}`
  }
});

export default urlPath;
