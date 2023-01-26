import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface MenuStyledProps {
  isMenuOpen: boolean;
}

export const HeaderStyled = styled.header`
  background-color: #2c2d32;
  padding-block: 4px;
`;

export const Logo = styled.div`
  text-align: center;

  a {
    font-family: 'Yeseva One', cursive;
    color: #cecccf;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.12em;
    font-weight: 400;
    font-family: 'Yeseva One', cursive;
  }
`;

export const MenuMobileIcon = styled(FiMenu)`
  font-size: 28px;
  cursor: pointer;
  color: #f0f0f0;

  @media (min-width: 46.75em) {
    display: none;
  }
`;

export const MenuCloseIcon = styled(IoClose)`
  font-size: 28px;
  cursor: pointer;
  color: #f0f0f0;

  @media (min-width: 46.75em) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackdropMenu = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 67px;
  bottom: 0;
  right: 0;

  @media (min-width: 46.75em) {
    display: none;
  }
`;

export const MenuStyled = styled.ul<MenuStyledProps>`
  ${({ theme, isMenuOpen }) => css`
    display: flex;
    column-gap: 30px;
    height: calc(100vh - 103px);
    width: 60vw;
    flex-direction: column;
    position: absolute;
    bottom: 36px;
    left: 0;
    padding-block: 30px 0;
    background-color: ${theme.colors.textBackground};
    z-index: 999;
    margin-left: ${isMenuOpen ? '0px' : '-1000px'};
    transition: all 0.3s ease;

    @media (min-width: 46.75em) {
      background-color: transparent;
      flex-direction: row;
      position: relative;
      height: max-content;
      width: max-content;
      padding-top: 0;
      margin-left: 0;
      bottom: 0;
    }
  `}
`;

export const PageLink = styled(NavLink)`
  ${({ theme }) => css`
    display: block;
    padding-inline: 20px;
    padding-block: 8px;
    font-size: 18px;
    color: ${theme.colors.textColor};

    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.white};

      @media (min-width: 46.75em) {
        background-color: transparent;
      }
    }

    &.active {
      color: ${theme.colors.white};
    }

    @media (min-width: 46.75em) {
      padding-inline: 0;
      color: #cecccf;
    }
  `}
`;
