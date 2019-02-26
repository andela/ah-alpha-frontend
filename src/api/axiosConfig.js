import axios from "axios";
import { BASE_URL } from "../actions/constants";

const token = localStorage.getItem("token");
const urlPath = axios.create({
  baseURL: `${BASE_URL}/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${token}`
  }
});

export default urlPath;
