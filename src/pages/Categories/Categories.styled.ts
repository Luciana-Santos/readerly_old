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
