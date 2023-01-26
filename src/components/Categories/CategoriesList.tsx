import { Readerly } from '../../types/types';
import { CategoriesListStyled } from './CategoriesList.styled';

interface CategoriesListProps {
  data: Readerly[];
}

const CategoriesList = ({ data }: CategoriesListProps) => {
  const allTags = ['all', ...new Set(data?.map((item) => item.tag).flat(1))];

  return (
    <CategoriesListStyled>
      <ul>
        {data &&
          allTags.map((tag, i) => (
            <li key={i}>
              <span>{tag}</span>
            </li>
          ))}
      </ul>
    </CategoriesListStyled>
  );
};
export default CategoriesList;
