import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

//instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";
instance.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
