import { TiArrowSortedUp } from 'react-icons/ti';
import styled, { css } from 'styled-components';

export const MainSectionStyled = styled.main`
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