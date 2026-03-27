import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const signupApi = async (user_name, email, phone_number, password) => {
  const result = await axios.post(`${API}/user/register`, {
    user_name,
    email,
    phone_number,
    password,
  });
  return result.data;
};

export default signupApi;
