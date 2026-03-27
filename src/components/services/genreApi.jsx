import axios from "axios";

const API = import.meta.env.VITE_API_URL;


export const getGenre = async () => {
  const result = await axios.get(`${API}/category/genre`);
  return result.data;
};
