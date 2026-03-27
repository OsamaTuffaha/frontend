import axios from "axios";

// 🔥 API base URL من Vercel env
const API = import.meta.env.VITE_API_URL;

// 🔥 helper تجيب التوكن
const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// 📥 users
export const getUsers = async () => {
  const result = await axios.get(
    `${API}/user`,
    getAuthHeader()
  );
  return result.data.users;
};

// ✏️ update
export const updateUser = async (id, user_name, email, phone_number) => {
  const result = await axios.put(
    `${API}/user/update/${id}`,
    {
      user_name,
      email,
      phone_number,
    },
    getAuthHeader()
  );
  return result.data;
};

// ❌ delete
export const deleteUser = async (id) => {
  const result = await axios.put(
    `${API}/user/${id}`,
    {},
    getAuthHeader()
  );
  return result.data;
};

// ➕ add category
export const addCategory = async (cat_name, image) => {
  const formData = new FormData();

  formData.append("cat_name", cat_name);
  formData.append("image", image);

  const token = localStorage.getItem("token");

  const result = await axios.post(
    `${API}/category/add`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result.data;
};

// 📂 get category
export const getCategory = async () => {
  const result = await axios.get(
    `${API}/category`,
    getAuthHeader()
  );
  return result.data;
};

// ➕ add question
export const addQuestion = async (data) => {
  const token = localStorage.getItem("token");

  return await axios.post(
    `${API}/question/add`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// 📂 get questions
export const getQuestionsByCategory = async (id) => {
  const res = await axios.get(
    `${API}/question/category/${id}`,
    getAuthHeader()
  );
  return res.data.data;
};

// ❌ delete question
export const deleteQuestion = async (id) => {
  await axios.delete(
    `${API}/question/${id}`,
    getAuthHeader()
  );
};