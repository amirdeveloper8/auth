import axios from "axios";

axios.defaults.baseURL = "http://192.168.7.19/hse/public/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
