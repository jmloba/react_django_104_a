import axios from "axios"

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
  baseURL:baseURL,
  headers: {
    'Content-Type':'application/json',
  }
})

// request interceptor
axiosInstance.interceptors.request.use(
  function(config){
    console.log('request without header', config)
    // add authorization 
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken){
      config.headers['Authorization']=`Bearer ${accessToken}`
    }
    return config
  },
  function(error){
    return Promise.reject(error)
  }
)

// response interceptor
axiosInstance.interceptors.response.use(
  function(response){
  return response
  },
  async function(error){
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry){
      originalRequest.retry=true;
      // get
      const refreshToken = localStorage.getItem('refreshToken')
      try{
        const response = await axiosInstance.post('/token/refresh/',{refresh:refreshToken})
        console.log('new response accesstoken: ' , response.data)
        localStorage.setItem('accessToken', response.data.access) 
        originalRequest.headers['Authorization']=`Bearer ${response.data.access}`
        return axiosInstance(originalRequest)



      }catch(error){
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href ='/login'
      }

    }

  }
)

export default axiosInstance