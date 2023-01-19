import { Link } from 'react-router-dom';
import { BulletIcon, MainSectionStyled } from './MainSection.styled';

const MainSection = ({ data }: any) => {
  return (
    <MainSectionStyled>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <BulletIcon />
              <Link to={`/categories/text/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </MainSectionStyled>
  );
};
export default MainSection;
