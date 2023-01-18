import { Container } from '../../GlobalStyled';
import { FooterStyled } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <p>
          Coded by{' '}
          <a href="https://github.com/Luciana-Santos">Luciana Santos© </a> |
          2023
        </p>
      </Container>
    </FooterStyled>
  );
};
export default Footer;
