import {
  AsideCategories,
  BulletIcon,
  CategoriesStyled,
  MainSection,
} from './Categories.styled';
import { content } from './content';

const Categories = () => {
  return (
    <CategoriesStyled>
      <AsideCategories>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          {content.map((categorie) => (
            <li key={categorie.id}>
              <a href="#">{categorie.categorie}</a>
            </li>
          ))}
        </ul>
      </AsideCategories>

      <MainSection>
        <ul>
          {content.map((categorie) => (
            <>
              <li key={categorie.id}>
                <BulletIcon />
                <a href="#">{categorie.title}</a>
              </li>
            </>
          ))}
        </ul>
      </MainSection>
    </CategoriesStyled>
  );
};
export default Categories;
