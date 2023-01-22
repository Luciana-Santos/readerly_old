import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from '../../GlobalStyled';
import {
  FinishButton,
  FooterButtons,
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

  const textArray = (e: any) => {
    const textArray = textContent?.text.split(' ');
    const shuffledArr = textArray.sort(() => 0.5 - Math.random());
    const n = 5;
    const result = shuffledArr.slice(0, n);

    handleDictionary(result, textArray);
  };

  const handleDictionary = (words: any, textArray: any) => {
    textArray.forEach((word) =>
      words.filter((w) =>
        word === w
          ? console.log('textArray-word é igual a word-sliced')
          : console.log('textArray-word não é igual a word-sliced')
      )
    );
  };

  return (
    <Container as="main">
      <ReadingPageStyled>
        <ReadingPageTitle>{textContent?.title}</ReadingPageTitle>

        <TextContent onClick={(e) => textArray(e)}>
          {textContent?.text}
        </TextContent>
      </ReadingPageStyled>

      <FooterButtons>
        <GoBackButton to="/categories">Back</GoBackButton>
        <FinishButton>Done</FinishButton>
      </FooterButtons>
    </Container>
  );
};
export default ReadingPage;
