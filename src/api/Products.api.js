import axios from 'axios';

const API_URL = process.env.API_URL;
const PRODUCTS_URL = `${API_URL}/products`;

export const getProducts = (query) => {
  const params = query && { params: query };
  return axios.get(PRODUCTS_URL, params);
}