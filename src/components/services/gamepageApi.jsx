import axios from "axios";

// 🔥 API base من Vercel
const API = import.meta.env.VITE_API_URL;

// 📌 base questions
const BASE_URL = `${API}/question`;

// ➕ add question
export const addQuestion = async (formData) => {
  return await axios.post(`${BASE_URL}/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 📂 get all questions
export const getQuestions = async () => {
  const res = await axios.get(`${BASE_URL}`);
  return res.data.data;
};

// 📂 get questions by category
export const getQuestionsByCategory = async (id) => {
  const res = await axios.get(`${BASE_URL}/category/${id}`);
  return res.data.data;
};

// 🎮 game questions
export const getGameQuestions = async (userId, categoryIds) => {
  const res = await axios.post(`${BASE_URL}/game`, {
    userId,
    categoryIds,
  });
  return res.data.data;
};

// ✅ mark played
export const markQuestionPlayed = async (userId, questionId) => {
  await axios.post(`${BASE_URL}/played`, {
    userId,
    questionId,
  });
};

// ❌ delete
export const deleteQuestion = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};