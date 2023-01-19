import { CategoriesListStyled } from './CategoriesList.styled';

const CategoriesList = ({ data }: any) => {
  const allTags = ['all', ...new Set(data?.map((item) => item.tag).flat(1))];

  return (
    <CategoriesListStyled>
      <ul>
        {data &&
          allTags.map((tag, i) => (
            <li key={data[i].id}>
              <span>{tag}</span>
            </li>
          ))}
      </ul>
    </CategoriesListStyled>
  );
};
export default CategoriesList;
