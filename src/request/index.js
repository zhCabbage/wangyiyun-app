import axios from "axios";
let server = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://netease-cloud-music-api-master-five.vercel.app/",
  timeout: 3000,
});
export default server