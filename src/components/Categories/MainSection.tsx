import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading/Loading';
import { BulletIcon, MainSectionStyled } from './MainSection.styled';

interface MainSectionProps {
  selectedCategory: string;
}

const MainSection = ({ selectedCategory }: MainSectionProps) => {
  const { data, loading } = useFetch();

  const filteredItems = data?.filter((item) =>
    selectedCategory === 'all' ? data : item.tag.includes(selectedCategory)
  );

  if (loading) return <Loading />;

  return (
    <MainSectionStyled>
      <ul>
        {data &&
          filteredItems?.map((item) => (
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
