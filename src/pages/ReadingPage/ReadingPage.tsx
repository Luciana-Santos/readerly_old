import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Glossary from '../../components/Glossary/Glossary';
import Loading from '../../components/Loading/Loading';
import { Container } from '../../GlobalStyled';
import { TextContext } from '../../store/TextContext';
import { Readerly } from '../../types/types';

import {
  FinishButton,
  FooterButtons,
  GoBackButton,
  ReadingPageStyled,
  ReadingPageTitle,
  Subtitle,
  TextAuthor,
  TextContent,
  TextInfo,
} from './ReadingPage.styled';

const ReadingPage = () => {
  const [glossary, setGlossary] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useContext(TextContext);

  const textContent = data?.find((text: Readerly) => text.id === Number(id));

  useEffect(() => {
    const textArray = textContent?.text.join(' ');

    const shuffledArr = textArray?.split(' ').sort(() => 0.5 - Math.random());
    const numWords = 10;
    const words = shuffledArr?.slice(0, numWords);
    const result = words?.filter(
      (word, index) => words.indexOf(word) === index
    );

    setGlossary(result as string[]);
  }, [textContent]);

  if (loading) return <Loading />;

  if (data) {
    return (
      <Container as="main">
        <ReadingPageStyled>
          <TextInfo>
            <ReadingPageTitle>{textContent?.title}</ReadingPageTitle>
            <TextAuthor> – {textContent?.author}</TextAuthor>
          </TextInfo>

          <TextContent>
            {textContent?.text.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </TextContent>

          <Subtitle>Glossary</Subtitle>
          <Glossary words={glossary} />
        </ReadingPageStyled>

        <FooterButtons>
          <GoBackButton to="/categories">Back</GoBackButton>
          <FinishButton>Done</FinishButton>
        </FooterButtons>
      </Container>
    );
  }
  return null;
};
export default ReadingPage;
