import { useState, useEffect } from 'react';
import { getReaderly } from '../api/readerly-service';
import { Readerly } from '../types/types';

const useFetch = () => {
  const [data, setData] = useState<Readerly[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReaderly();
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
