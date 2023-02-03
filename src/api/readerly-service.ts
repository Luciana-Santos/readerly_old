import { Readerly } from '../types/types';
import { apiReaderly } from './api';

export const getReaderly = async (): Promise<Readerly[]> => {
  const { data } = await apiReaderly.get<Readerly[]>('/data.json');
  return data;
};
