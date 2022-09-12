import React from 'react';
import styled from 'styled-components';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import {
  DPIconFast,
  DPIconShipping,
  DPIconSustain,
  DPIconUnique,
} from '../../icons';

const OpenStore = () => {
  const data = [
    {
      text: 'Fast shipping. Free on orders over $25.',
      icon: <DPIconShipping />,
    },
    {
      text: 'Sustainable process from start to finish.',
      icon: <DPIconSustain />,
    },
    {
      text: 'Unique designs and high-quality materials.',
      icon: <DPIconUnique />,
    },
    {
      text: 'Unique designs and high-quality materials.',
      icon: <DPIconFast />,
    },
  ];
  return (
    <Wrapper>
      <Header>OpenStore</Header>
      <Text>
        Making a luxurious lifestyle accessible for a generous group of all is
        our daily drive.
      </Text>

      <StoreContainer>
        {data?.map(({ text, icon }, idx) => (
          <div className="store-item" key={idx}>
            {icon}
            <p>{text}</p>
          </div>
        ))}
      </StoreContainer>
    </Wrapper>
  );
};

export default OpenStore;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 3.2rem;
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 1.1rem;
`;

const Text = styled.p`
  font-size: ${FONTSIZES.small};
  text-align: center;
`;

const StoreContainer = styled.div`
  display: grid;
  gap: 3.7rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;

  .store-item {
    display: flex;
    gap: 1.12rem;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
      font-size: ${FONTSIZES.small};
    }
  }
`;
