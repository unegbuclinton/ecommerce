import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import { removeItem } from '../../features/addToCart';
import {
  DPIconClose,
  DPIconDecreaseIcon,
  DPIconIncreaseIcon,
} from '../../icons';
import Button from '../atoms/Button';
import CardItem from './CardItem';

const Cart = ({ onClose }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useSelector((state) => state.addToCart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    var value = 0;
    cartItems?.map(({ price }) => {
      value += price;
      setTotalPrice(value);
      return value;
    });
  }, [cartItems]);
  return (
    <CartWrapper>
      <CartEmpty></CartEmpty>
      <DPIconClose onClick={onClose} />
      <CartHeader>SHOPPING CART</CartHeader>

      {!!cartItems?.length ? (
        <div className="cardItem-container">
          {cartItems?.map(({ price, image, title, id }, idx) => (
            <CartItemWrapper key={idx}>
              <CardItem img={image} />
              <div className="right-item">
                <h6 className="right-item__header">{title}</h6>
                <div className="action-section">
                  <DPIconIncreaseIcon /> <span>1</span> <DPIconDecreaseIcon />
                </div>
                <p className="price-tag">{`$${price}`}</p>

                <Button
                  className="cart-btn"
                  onClick={() => dispatch(removeItem(id))}
                >
                  Remove
                </Button>
              </div>
            </CartItemWrapper>
          ))}
        </div>
      ) : (
        <CartEmpty>You have no item in your shopping bag</CartEmpty>
      )}

      <CartTotal>
        <p className="total-text">SUB TOTAL :</p>
        <p className="total-value">${totalPrice}</p>
      </CartTotal>
      <CardInfoText>
        *shipping charges, taxes and discount codes are calculated at the time
        of accounting.
      </CardInfoText>
      <Button className="footer-btn" onClick={() => navigate('/checkout')}>
        CHECK OUT
      </Button>
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
  height: 102vh;
  background-color: ${COLORS.white};
  padding: 2.2rem 1rem 2.7rem 1rem;
  overflow: auto;

  .cardItem-container {
    border-bottom: 1px solid ${COLORS['border-color']};
  }

  .footer-btn {
    width: 100%;
    background-color: ${COLORS.black};
    font-size: ${FONTSIZES.small};
    padding: 1.5rem 0;
    border-radius: 0.3rem;
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS.white};
    margin-top: 2rem;
  }
`;

const CartHeader = styled.h1`
  font-size: ${FONTSIZES.xxlarge};
  font-weight: ${FONTWEIGHTS.normal};
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;
const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  .total-text {
    font-size: ${FONTSIZES.small};
  }
  .total-value {
    font-size: ${FONTSIZES.base};
    color: ${COLORS['cooper-crayola']};
  }
`;

const CardInfoText = styled.p`
  text-align: left;
  font-size: ${FONTSIZES.small};
  margin-top: 2.2rem;
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

const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  text-align: center;
  padding: 2rem;
`;
