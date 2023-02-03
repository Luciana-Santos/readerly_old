import axios from 'axios';

export const apiReaderly = axios.create({
  baseURL: 'https://readerly-e2ca1-default-rtdb.firebaseio.com',
});

export const apiGlossary = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
});
