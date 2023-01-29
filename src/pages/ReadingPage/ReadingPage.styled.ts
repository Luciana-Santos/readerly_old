import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ReadingPageStyled = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.textBackground};
    border-radius: 2px;
    height: calc(100vh - 222px);
    padding-inline: clamp(20px, 5vw, 60px);
    padding-block: clamp(40px, 5vw, 60px);
    overflow-y: auto;
    margin-block: 30px;
  `}
`;

export const TextInfo = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const ReadingPageTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
    font-size: clamp(20px, 5vw, 28px);
    font-family: 'Yeseva One', cursive;
    line-height: 1.4;
    margin-bottom: 10px;
  `}
`;

export const TextAuthor = styled.span`
  color: ${({ theme }) => theme.colors.textColor};
  opacity: 0.8;
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-size: clamp(22px, 5vw, 28px);
    margin-top: 90px;
    max-width: 760px;
    margin-inline: auto;
    margin-bottom: 34px;
  `}
`;

export const TextContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-size: clamp(18px, 5vw, 20px);
    text-indent: 20px;
    max-width: 760px;
    margin-inline: auto;

    p {
      margin-bottom: 10px;
    }
  `}
`;

export const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 46.75em) {
    margin-bottom: 10px;
  }
`;

export const GoBackButton = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.highlights};
    text-decoration: underline;
    display: inline-block;

    &:hover {
      color: ${theme.colors.textColor};
    }
  `}
`;

export const FinishButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.accent};
    padding-block: 6px;
    padding-inline: 10px;
    border: none;
    cursor: pointer;
    color: ${theme.colors.white};
    border-radius: 2px;
  `}
`;
