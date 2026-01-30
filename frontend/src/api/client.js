import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// API client with error handling
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
});

// Site Config
export const getSiteConfig = async () => {
  const response = await apiClient.get('/config');
  return response.data;
};

// Essays
export const getEssays = async () => {
  const response = await apiClient.get('/essays');
  return response.data;
};

export const getRecentEssays = async (limit = 3) => {
  const response = await apiClient.get(`/essays/recent?limit=${limit}`);
  return response.data;
};

export const getEssayBySlug = async (slug) => {
  const response = await apiClient.get(`/essays/${slug}`);
  return response.data;
};

// About
export const getAbout = async () => {
  const response = await apiClient.get('/about');
  return response.data;
};
