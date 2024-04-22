import axios from "axios"


const api =axios.create({
   // baseURL:"https://biovault-lhvl.onrender.com"
  // baseURL:"https://biovault-backend.onrender.com/"
    //baseURL:'http://localhost:5000'
    //baseURL:"https://biovault-1.onrender.com"
   baseURL:"https://biovault-backend.onrender.com/"
})
export default api
