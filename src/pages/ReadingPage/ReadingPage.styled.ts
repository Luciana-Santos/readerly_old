import styled, { css } from 'styled-components';

export const ReadingPageStyled = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.textBackground};
    border-radius: 2px;
    height: calc(100vh - 203px);
    padding-inline: clamp(20px, 5vw, 60px);
    padding-block: clamp(40px, 5vw, 60px);
    overflow-y: auto;
    margin-block: 30px;

    @media (min-width: 46.75em) {
      height: calc(100vh - 203px);
    }
  `}
`;

export const ReadingPageTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
    text-align: center;
    font-size: clamp(22px, 5vw, 28px);
    margin-bottom: 60px;
  `}
`;

export const TextContent = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-size: clamp(18px, 5vw, 20px);
    text-indent: 20px;
    max-width: 760px;
    margin-inline: auto;
  `}
`;

export const GoBackButton = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.highlights};
    text-decoration: underline;
    margin-bottom: 10px;
    display: inline-block;

    &:hover {
      color: ${theme.colors.textColor};
    }
  `}
`;
