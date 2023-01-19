import { TiArrowSortedUp } from 'react-icons/ti';
import styled, { css } from 'styled-components';
import { Container } from '../../GlobalStyled';

export const CategoriesStyled = styled(Container)`
  ${({ theme }) => css`
    margin-block: 30px;
    display: grid;
    gap: 30px;

    @media (min-width: 46.75em) {
      grid-template-columns: 1fr 3fr;
    }
  `}
`;

export const MainSection = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.textBackground};
    border-radius: 2px;
    height: calc(100vh - 270px);
    padding: 20px;
    overflow-y: auto;

    > ul {
      display: grid;
      gap: 6px;

      > li {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      > li a {
        padding-block: 6px;
        color: ${theme.colors.textColor};

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (min-width: 46.75em) {
      height: calc(100vh - 170px);
    }
  `};
`;

export const BulletIcon = styled(TiArrowSortedUp)`
  color: ${({ theme }) => theme.colors.highlights};
  min-width: 14px;
  transform: rotate(90deg);
`;

export const AsideCategories = styled.aside`
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

    a {
      padding-block: 6px;
      color: ${theme.colors.textColor};
      text-transform: capitalize;
      padding-inline: 10px;
      border-radius: 2px;

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
