import styled, { css } from 'styled-components';

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - 38px);
    width: 100vw;
    background: ${theme.colors.textBackground};
    display: grid;
    place-content: center;

    svg path {
      stroke: ${theme.colors.textColor};
      stroke-width: 6px;
      stroke-linecap: round;
    }
  `}
`;
