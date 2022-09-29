import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import Button from '../atoms/Button';

const WishListCard = ({ details, img, title, price, onClick, toItem }) => {
  return (
    <WishCard onClick={toItem}>
      <WishCardImg src={img} />
      {details && (
        <>
          <WishCardText>{title}</WishCardText>
          <WishCardTextPrice>{price}</WishCardTextPrice>
        </>
      )}
      <Button onClick={onClick} className="wish-btn">
        Remove Item
      </Button>
    </WishCard>
  );
};

export default WishListCard;

const WishCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 14.5rem;
  min-width: 14.5rem;
  min-height: 22.4rem;
  padding: 3rem 2.35rem 1.6rem 2.35rem;
  margin-bottom: 4.6rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  .wish-btn {
    width: 100%;
    background-color: ${COLORS.black};
    padding: 1.5rem 0;
    color: ${COLORS.white};
    border-radius: 0.3rem;
    border: none;
  }
`;

const WishCardImg = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const WishCardText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  margin-bottom: 2.7rem;
  overflow-wrap: break-word;
`;

const WishCardTextPrice = styled.p`
  font-size: ${FONTSIZES.small};
  margin-bottom: 2.7rem;
  font-weight: ${FONTWEIGHTS.bold};
`;
