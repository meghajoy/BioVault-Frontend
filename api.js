import axios from "axios"


const api =axios.create({
    //baseURL:"https://biovault-backend.onrender.com/"
    baseURL:'http://127.0.0.1:5000'
})
export default api