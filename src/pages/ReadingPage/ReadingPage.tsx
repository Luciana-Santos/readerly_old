import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getReaderly } from '../../api/readerly-service';
import Glossary from '../../components/Glossary/Glossary';
import { Container } from '../../GlobalStyled';
import { Readerly, GlossaryProps } from '../../types/types';

import {
  FinishButton,
  FooterButtons,
  GoBackButton,
  ReadingPageStyled,
  ReadingPageTitle,
  Subtitle,
  TextContent,
} from './ReadingPage.styled';

const ReadingPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Readerly[]>();
  const [glossary, setGlossary] = useState<string[]>([]);

  const textContent = data?.find((text: Readerly) => text.id === Number(id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReaderly();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const textArray = textContent?.text;
    const shuffledArr = textArray?.split(' ').sort(() => 0.5 - Math.random());
    const n = 5;
    const words = shuffledArr?.slice(0, n);
    const result = words?.filter((word) => textContent?.text.includes(word));

    setGlossary(result as string[]);
  }, [textContent]);

  return (
    <Container as="main">
      <ReadingPageStyled>
        <ReadingPageTitle>{textContent?.title}</ReadingPageTitle>

        <TextContent>{textContent?.text}</TextContent>

        <Subtitle>Glossary</Subtitle>
        <Glossary words={glossary} />
      </ReadingPageStyled>

      <FooterButtons>
        <GoBackButton to="/categories">Back</GoBackButton>
        <FinishButton>Done</FinishButton>
      </FooterButtons>
    </Container>
  );
};
export default ReadingPage;
