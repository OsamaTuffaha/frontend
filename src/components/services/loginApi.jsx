import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const loginApi = async (email, password) => {
  const result = await axios.post(`${API}/user/login`, {
    email,
    password,
  });

  return result.data;
};