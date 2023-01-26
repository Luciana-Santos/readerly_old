import { useEffect, useState } from 'react';
import CategoriesList from '../../components/Categories/CategoriesList';
import MainSection from '../../components/Categories/MainSection';
import { Readerly } from '../../types/types';
import { CategoriesStyled } from './Categories.styled';

const Categories = () => {
  const [data, setData] = useState<Readerly[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://readerly-e2ca1-default-rtdb.firebaseio.com/data.json'
        );
        const dataDb = await response.json();

        setData(dataDb);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <CategoriesStyled>
      <CategoriesList data={data} />

      <MainSection data={data} />
    </CategoriesStyled>
  );
};
export default Categories;
