import { useState } from 'react';
import CategoriesList from '../../components/Categories/CategoriesList';
import MainSection from '../../components/Categories/MainSection';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch';
import { CategoriesStyled } from './Categories.styled';

const Categories = () => {
  const { data, loading } = useFetch();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterItems = (category: string) => {
    setSelectedCategory(category);
  };
  if (loading) return <Loading />;
  if (data) {
    return (
      <CategoriesStyled>
        <CategoriesList
          selectedCategory={selectedCategory}
          onHandleCategory={filterItems}
          items={data}
        />

        <MainSection selectedCategory={selectedCategory} />
      </CategoriesStyled>
    );
  }
  return null;
};
export default Categories;
