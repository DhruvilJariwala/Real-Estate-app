import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-app-backend-u92g.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;