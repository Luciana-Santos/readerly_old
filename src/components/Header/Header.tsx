import { useState } from 'react';
import { Container, Flex } from '../../GlobalStyled';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import WordCart from '../WordCart/WordCart';
import { menuContent } from './content';
import {
  HeaderStyled,
  Logo,
  MenuCloseIcon,
  MenuMobileIcon,
  MenuStyled,
  Nav,
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
          <a href="#">Readerly</a>
        </Logo>

        <Nav>
          <Flex gap="30px">
            {isMenuOpen ? (
              <MenuCloseIcon onClick={handleMenuMobile} />
            ) : (
              <MenuMobileIcon onClick={handleMenuMobile} />
            )}

            <MenuStyled isMenuOpen={isMenuOpen}>
              {menuContent.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.name}</a>
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
