import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex } from '../../GlobalStyled';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import WordCart from '../WordCart/WordCart';
import { menuContent } from './content';
import {
  BackdropMenu,
  HeaderStyled,
  Logo,
  MenuCloseIcon,
  MenuMobileIcon,
  MenuStyled,
  Nav,
  PageLink,
} from './Header.styled';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuMobile = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderStyled>
      <Container>
        <Logo>
          <Link to="/">Readerly</Link>
        </Logo>

        <Nav>
          <Flex gap="30px">
            {isMenuOpen ? (
              <MenuCloseIcon onClick={handleMenuMobile} />
            ) : (
              <MenuMobileIcon onClick={handleMenuMobile} />
            )}

            {isMenuOpen ? <BackdropMenu onClick={handleMenuMobile} /> : null}
            <MenuStyled isMenuOpen={isMenuOpen}>
              {menuContent.map((link) => (
                <li key={link.id}>
                  <PageLink
                    to={link.url}
                    onClick={handleMenuMobile}
                    className={({ isActive }) => (isActive ? 'activeLink' : '')}
                  >
                    {link.name}
                  </PageLink>
                </li>
              ))}
            </MenuStyled>

            <ThemeSwitcher />
          </Flex>

          <WordCart />
        </Nav>
      </Container>
    </HeaderStyled>
  );
};
export default Header;
