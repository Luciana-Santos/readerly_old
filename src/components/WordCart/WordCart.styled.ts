import { MdBookmarkAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WordCartStyled = styled(Link)`
  display: flex;
  cursor: pointer;
  gap: 4px;
  padding-inline: 8px 4px;
  justify-self: end;
  border-radius: 2px;
  padding-top: 4px;

  span {
    font-size: 20px;
    color: #f0f0f0;
    padding-bottom: 0;
  }

  &:hover {
    background-color: #0d0d0d;
  }
`;

export const WordCartIcon = styled(MdBookmarkAdd)`
  color: #78ac70;
  font-size: 24px;
`;
