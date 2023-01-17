import { GoGear } from 'react-icons/go';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: grid;
  gap: 40px;
  text-align: center;
`;

export const GearIcon = styled(GoGear)`
  font-size: 80px;
  color: #484649;
`;

export const Title = styled.h1`
  font-family: 'Yeseva One', cursive;
  font-size: clamp(28px, 5vw, 40px);
`;

export const GearsContainer = styled.div`
  position: relative;
  max-width: 200px;
  padding: 20px;
  margin-inline: auto;
`;

export const RightGear = styled.div`
  animation: rollRight linear 5s infinite;
  max-width: 100px;

  @keyframes rollRight {
    0% {
      transform: rotate(0);
    }
    99% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LeftGear = styled(RightGear)`
  animation: rollLeft linear 5s infinite;
  position: relative;
  bottom: 30px;
  right: -56px;
  max-width: 100px;

  @keyframes rollLeft {
    0% {
      transform: rotate(0);
    }
    99% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const Message = styled.p`
  max-width: 500px;
`;
