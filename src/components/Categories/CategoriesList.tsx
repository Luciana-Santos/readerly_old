import { useState } from 'react';
import { Readerly } from '../../types/types';
import { CategoriesListStyled } from './CategoriesList.styled';

interface CategoriesListProps {
  items: Readerly[];
  selectedCategory: string;
  onHandleCategory: (category: string) => void;
}

const CategoriesList = ({
  items,
  onHandleCategory,
  selectedCategory,
}: CategoriesListProps) => {
  const allTags = ['all', ...new Set(items?.map((item) => item.tag).flat(1))];

  return (
    <CategoriesListStyled>
      <ul>
        {allTags.map((tag, i) => (
          <li key={i}>
            <button
              onClick={() => onHandleCategory(tag)}
              className={tag === selectedCategory ? 'selected' : ''}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </CategoriesListStyled>
  );
};
export default CategoriesList;
