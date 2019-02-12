import axios from "axios";

const token = localStorage.getItem("token");
const urlPath = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token} `
  }
});

export default urlPath;
