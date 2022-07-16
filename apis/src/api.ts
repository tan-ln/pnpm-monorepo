import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

const api: AxiosInstance = axios.create({
  headers: {
    'content-type': 'application/json'
  }
})

// Add a request interceptor
api.interceptors.request.use((config: AxiosRequestConfig) => {
  // Do something before request is sent
  // token 处理
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
});

// Add a response interceptor
api.interceptors.response.use((response: AxiosResponse) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log(23, response);
  
  if (response.status !== 200) {
    Promise.reject(response)
  }
  return response
}, function (error) {
  console.log(28, error.response);
  
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // 错误处理
  return Promise.reject(error)
})

export default api
