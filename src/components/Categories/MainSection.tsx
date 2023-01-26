import { Link } from 'react-router-dom';
import { Readerly } from '../../types/types';
import { BulletIcon, MainSectionStyled } from './MainSection.styled';

interface MainSectionProps {
  data: Readerly[];
}

const MainSection = ({ data }: MainSectionProps) => {
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
