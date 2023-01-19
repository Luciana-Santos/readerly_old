import styled, { css } from 'styled-components';

export const CategoriesListStyled = styled.aside`
  ${({ theme }) => css`
    border-radius: 2px;
    padding-block: 20px;
    background: ${theme.colors.textBackground};
    overflow-x: auto;

    ul {
      display: flex;
      gap: 10px;
      padding-inline: 10px;

      @media (min-width: 46.75em) {
        flex-direction: column;
        padding-inline: 0;
      }
    }

    span {
      display: grid;
      place-items: center;
      padding-block: 6px;
      color: ${theme.colors.textColor};
      text-transform: capitalize;
      padding-inline: 10px;
      border-radius: 2px;
      cursor: pointer;

      &:hover {
        background: ${theme.colors.accent};
        color: ${theme.colors.white};
      }
      @media (min-width: 46.75em) {
        display: block;
        padding-inline: 20px;
      }
    }

    @media (min-width: 46.75em) {
      background: linear-gradient(
        180deg,
        ${theme.colors.textBackground},
        ${theme.colors.backgroundColor}
      );
      height: calc(100vh - 170px);
    }
  `};
`;
