import axios from 'axios';

// Gunakan VITE_API_BASE_URL atau fallback ke URL langsung jika tidak tersedia
const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://api-kawal-desa.lskk.co.id';

const API = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
