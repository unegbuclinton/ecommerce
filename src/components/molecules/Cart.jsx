import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import { DPIconClose } from '../../icons';
import Button from '../atoms/Button';
import CartCardItem from './CartCardItem';

const Cart = ({ onClose }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useSelector((state) => state.addToCart);

  const navigate = useNavigate();

  useEffect(() => {
    var value = 0;
    cartItems?.map(({ price, num }) => {
      value += price * num;
      setTotalPrice(value);
      return value;
    });
  }, [cartItems]);

  const active = cartItems?.length <= 0;

  return (
    <CartWrapper>
      <CartEmpty></CartEmpty>
      <DPIconClose onClick={onClose} />
      <CartHeader>SHOPPING CART</CartHeader>

      {!!cartItems?.length ? (
        <div className="cardItem-container">
          {cartItems?.map(({ price, image, title, id, num }, idx) => (
            <div key={idx}>
              <CartCardItem
                img={image}
                title={title}
                id={id}
                price={price}
                num={num}
              />
            </div>
          ))}
        </div>
      ) : (
        <CartEmpty>You have no item in your shopping bag</CartEmpty>
      )}

      <CartTotal>
        <p className="total-text">SUB TOTAL :</p>
        <p className="total-value">${totalPrice.toFixed(2)}</p>
      </CartTotal>
      <CardInfoText>
        *shipping charges, taxes and discount codes are calculated at the time
        of accounting.
      </CardInfoText>
      <Button
        disabled={active}
        className={`footer-btn ${active ? 'disabled' : ''} `}
        onClick={() => navigate('/checkout')}
      >
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
  .disabled {
    background-color: ${COLORS.grey};
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

const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  text-align: center;
  padding: 2rem;
`;
