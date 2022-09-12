import React from 'react';
import styled from 'styled-components';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

const CardItem = ({ details, img }) => {
  return (
    <Card>
      <CardImg src={img} />
      {details && (
        <>
          <CardText>Mens Casual Slim Fit</CardText>
          <CardTextPrice>$15.25</CardTextPrice>
        </>
      )}
    </Card>
  );
};

export default CardItem;

const Card = styled.div`
  max-width: 16.5rem;
  min-width: 16.5rem;
  min-height: 22.4rem;
  padding: 3rem 1.35rem 1.6rem 1.35rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const CardText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  margin-bottom: 2.7rem;
`;

const CardTextPrice = styled.p`
  font-size: ${FONTSIZES.small};
  margin-bottom: 2.7rem;
  font-weight: ${FONTWEIGHTS.bold};
`;
