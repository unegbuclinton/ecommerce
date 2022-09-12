import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import {
  DPIconClose,
  DPIconDecreaseIcon,
  DPIconIncreaseIcon,
} from '../../icons';
import Button from '../atoms/Button';
import CardItem from './CardItem';

const Cart = ({ onClose }) => {
  const { dataItem } = useSelector((state) => state.landing);

  return (
    <CartWrapper>
      <DPIconClose onClick={onClose} />
      <CartHeader>SHOPPING CART</CartHeader>

      {dataItem?.map(({ price, image, title }) => (
        <CartItemWrapper>
          <CardItem img={image} />
          <div className="right-item">
            <h6 className="right-item__header">{title}</h6>
            <div className="action-section">
              <DPIconIncreaseIcon /> <span>1</span> <DPIconDecreaseIcon />
            </div>
            <p className="price-tag">{`$${price}`}</p>

            <Button className="cart-btn">Remove</Button>
          </div>
        </CartItemWrapper>
      ))}
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
  height: 100vh;
  background-color: ${COLORS.white};
  padding: 2.2rem 0rem 2.7rem 1.4rem;
  overflow: auto;
`;

const CartHeader = styled.h1`
  font-size: ${FONTSIZES.xxlarge};
  font-weight: ${FONTWEIGHTS.normal};
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

const CartItemWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.4rem;
  margin-bottom: 4.7rem;

  .right-item {
    padding-right: 1.5rem;
    margin-top: 1rem;
    padding-bottom: 1rem;

    &__header {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.normal};
      margin-bottom: 1.8rem;
    }

    .action-section {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      margin-bottom: 3.2rem;

      span {
        font-size: ${FONTSIZES.small};
      }
    }
  }

  .price-tag {
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.bold};
    margin-bottom: 3.9rem;
  }

  .cart-btn {
    background-color: ${COLORS.black};
    font-size: ${FONTSIZES.small};
    padding: 1.2rem 2.2rem;
    border-radius: 0.3rem;
    color: ${COLORS.white};
  }
`;
