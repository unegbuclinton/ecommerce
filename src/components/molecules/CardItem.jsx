import React from 'react';
import styled from 'styled-components';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

const CardItem = ({ details, img, title, price, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardImg src={img} />
      {details && (
        <>
          <CardText>{title}</CardText>
          <CardTextPrice>{price}</CardTextPrice>
        </>
      )}
    </Card>
  );
};

export default CardItem;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-width: 14.5rem;
  min-height: 22.4rem;
  padding: 3rem 1.35rem 1.6rem 1.35rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media only screen and (min-width: 768px) {
    max-width: 18.5rem;
  }
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const CardText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  margin-bottom: 2.7rem;
  overflow-wrap: break-word;
`;

const CardTextPrice = styled.p`
  font-size: ${FONTSIZES.small};
  margin-bottom: 2.7rem;
  font-weight: ${FONTWEIGHTS.bold};
`;
