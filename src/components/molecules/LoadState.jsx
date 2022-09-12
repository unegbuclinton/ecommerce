import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

const LoadingScreen = () => {
  const [num, setNum] = React.useState(0);

  const timer = setTimeout(() => {
    if (num < 100) {
      setNum(num + 1);
    }
    return () => clearTimeout(timer);
  }, 75);

  return (
    <Wrapper>
      <Text>{`${num} %`}</Text>
      <ProgressWrapper>
        <ProgressColor />
      </ProgressWrapper>
    </Wrapper>
  );
};

export default LoadingScreen;

const Wrapper = styled.div`
  background-color: ${COLORS.black};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-size: ${FONTSIZES.base};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 1.5rem;
`;
const ProgressWrapper = styled.div`
  position: relative;
  height: 10px;
  width: 80%;
  border: 10px solid ${COLORS.white};
  border-radius: 15px;
`;

const ProgressColor = styled.div`
  position: absolute;
  background-color: #000;
  width: 0px;
  top: -5px;
  height: 10px;
  border-radius: 15px;
  animation: progres 8s infinite linear;

  @keyframes progres {
    0% {
      width: 0%;
    }
    20% {
      width: 15%;
    }
    30% {
      width: 25%;
    }
    40% {
      width: 35%;
    }
    50% {
      width: 45%;
    }
    65% {
      width: 65%;
    }
    75% {
      width: 80%;
    }
    85% {
      width: 90%;
    }
    95% {
      width: 97%;
    }
    100% {
      width: 99%;
    }
  } ;
`;
