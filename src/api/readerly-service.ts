import { api } from './api';
import { Readerly } from '../types/types';

export const getReaderly = async (): Promise<Readerly[]> => {
  const { data } = await api.get<Readerly[]>('/data.json');
  return data;
};
