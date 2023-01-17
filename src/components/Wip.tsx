import { AnimatePresence } from 'framer-motion';
import {
  ContentContainer,
  GearsContainer,
  LeftGear,
  Message,
  RightGear,
  Title,
} from './Wip.styled';

const Wip = () => {
  return (
    <AnimatePresence>
      <ContentContainer>
        <Title>Em construção...</Title>
        <GearsContainer>
          <RightGear>
            <img
              src="https://i.postimg.cc/qvtd1RxH/right-gear.png"
              alt="Right gear"
            />
          </RightGear>

          <LeftGear>
            <img
              src="https://i.postimg.cc/rFZkGWW9/left-gear.png"
              alt="Left gear"
            />
          </LeftGear>
        </GearsContainer>
        <Message>
          Esta página está ainda em construção, mas você pode conferir{' '}
          <a href="https://lucianadss.netlify.app/" target="_blank">
            aqui{' '}
          </a>{' '}
          outros projetos já concluídos.
        </Message>
      </ContentContainer>
    </AnimatePresence>
  );
};
export default Wip;
