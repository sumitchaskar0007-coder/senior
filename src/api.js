import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL ;
// || 'https://jadhavarseniorcollege.com/api'
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const normalizeCollection = (payload, preferredKeys = []) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  const candidateKeys = [
    ...preferredKeys,
    'data',
    'items',
    'results',
    'docs',
    'rows',
  ];

  for (const key of candidateKeys) {
    if (Array.isArray(payload[key])) {
      return payload[key];
    }
  }

  for (const value of Object.values(payload)) {
    if (Array.isArray(value)) {
      return value;
    }
  }

  return [];
};

export const normalizeEntity = (payload, preferredKeys = []) => {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return payload ?? null;
  }

  const candidateKeys = [...preferredKeys, 'data', 'item', 'result'];

  for (const key of candidateKeys) {
    const value = payload[key];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value;
    }
  }

  return payload;
};

export const normalizeStringList = (value) => {
  if (Array.isArray(value)) {
    return value.filter((item) => typeof item === 'string' && item.trim());
  }

  if (typeof value === 'string') {
    return value
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

export default api;
