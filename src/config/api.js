import axios from "axios";
// buat base URL
export const API = axios.create({
  baseURL: "https://dumbmers-be.projeku.tech/api",
});
//   baseURL: process.env.SERVER_URL || "http://localhost:5000/api",

// Set Authorization Token Header
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
