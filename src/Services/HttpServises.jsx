import axios from "axios";


const instanceAxios =axios.create({
    baseURL :"http://localhost:5000/api"
})



const siqnUser =(newUser)=>{
    return instanceAxios.post("/user/register" ,newUser)
}


const loginUser =(newUser)=>{
    return instanceAxios.post("/user/login" ,newUser)
}






export{siqnUser , loginUser}