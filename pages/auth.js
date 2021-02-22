import axios from "axios";
import { API } from "../config";

export const postRegister = async (name, email, password, categories) => {
  const response = await axios.post(`${API}/register`, {
    name,
    email,
    password,
    categories,
  });
  return response;
};

export const callPopular = async () => {
  const response = await axios.get(`${API}/link/popular`);
  return response;
};

export const callCat = async () => {
  const response = await axios.get(`${API}/categories`);
  return {
    response,
  };
};
