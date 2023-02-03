import { DictionaryProps, Readerly } from '../types/types';
import { apiGlossary, apiReaderly } from './api';

export const getReaderly = async (): Promise<Readerly[]> => {
  const { data } = await apiReaderly.get<Readerly[]>('/data.json');
  return data;
};

export const getGlossary = async (word: string) => {
  const data = await apiGlossary.get<DictionaryProps[]>(`${word}`);
  return data;
};
