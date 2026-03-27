import axios from "axios"

const API = import.meta.env.VITE_API_URL;


export const getUsers = async () =>{

    const result = await axios.get(`${API}/user`)
    return result.data.users

    


}