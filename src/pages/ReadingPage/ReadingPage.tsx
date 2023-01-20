import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from '../../GlobalStyled';
import {
  GoBackButton,
  ReadingPageStyled,
  ReadingPageTitle,
  TextContent,
} from './ReadingPage.styled';

const ReadingPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>();
  const textContent = data?.find((text: any) => text.id === +id);

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
    <Container as="main">
      <ReadingPageStyled>
        <ReadingPageTitle>{textContent?.title}</ReadingPageTitle>

        <TextContent>{textContent?.text}</TextContent>
      </ReadingPageStyled>
      <GoBackButton href="/categories">Back</GoBackButton>
    </Container>
  );
};
export default ReadingPage;
