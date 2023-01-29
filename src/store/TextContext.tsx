import React, { createContext, useEffect, useState } from 'react';
import { getReaderly } from '../api/readerly-service';
import { Readerly } from '../types/types';

interface ChildrenProps {
  children: React.ReactNode;
}

interface TextContextProps {
  data: Readerly[];
  loading: boolean;
}

export const TextContext = createContext({} as TextContextProps);

const TextProvider = ({ children }: ChildrenProps) => {
  const [data, setData] = useState<Readerly[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        setLoading(true);
        response = await getReaderly();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setData(response);
      }
    };

    fetchData();
  }, [getReaderly]);

  return (
    <TextContext.Provider value={{ data: data || [], loading }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;
