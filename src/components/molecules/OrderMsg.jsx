import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import {
  DPIconAngryEmoji,
  DPIconHappyEmoji,
  DPIconNotHapptEmoji,
  DPIconSuccessIcon,
} from '../../icons';
import Button from '../atoms/Button';

const OrderMsg = () => {
  const num = Math.floor(Math.random() * 90000) + 10000;
  const navigate = useNavigate();

  return (
    <Wrapper>
      <MessageHeader>ORDER SUCCESS</MessageHeader>
      <DPIconSuccessIcon />
      <MessageSubHeader>Your Order was Successful</MessageSubHeader>
      <MessageText>Payment ID {`153${num}`}</MessageText>

      <p className="review">Rate your Purchase</p>
      <div className="emoji">
        <DPIconHappyEmoji />
        <DPIconNotHapptEmoji />
        <DPIconAngryEmoji />
      </div>

      <ButtonContainer>
        <Button className="submit" onClick={() => navigate('/category')}>
          SUBMIT
        </Button>
        <Button className="home" onClick={() => navigate('/category')}>
          BACK TO HOME
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default OrderMsg;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
  padding: 2.4rem 1.3rem;
  border-radius: 0.5rem;

  .review {
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.normal};
    margin-top: 2.2rem;
  }
  .emoji {
    display: flex;
    gap: 2.1rem;
    margin-top: 1.6rem;
  }
`;

const MessageHeader = styled.h1`
  text-align: center;
  margin-bottom: 3.4rem;
`;

const MessageSubHeader = styled.h2`
  margin-top: 3.1rem;
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.medium};
`;

const MessageText = styled.p`
  padding-bottom: 2.3rem;
  border-bottom: 1px solid ${COLORS['border-color']};
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.normal};
  margin-top: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 5.6rem;

  .submit {
    background-color: ${COLORS.black};
    color: ${COLORS.white};
    padding: 0.8rem 2.3rem;
    font-size: ${FONTSIZES.xlarge};
    border-radius: 0.3rem;
  }

  .home {
    background-color: transparent;
    color: ${COLORS.black};
    border: 1px solid ${COLORS.black};
    padding: 0.8rem 0.9rem;
    font-size: ${FONTSIZES.xlarge};
    border-radius: 0.3rem;
  }
`;
