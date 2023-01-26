import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://readerly-e2ca1-default-rtdb.firebaseio.com',
});
