import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import {
  decrementValue,
  incrementValue,
  removeItem,
} from '../../features/addToCart';
import { DPIconDecreaseIcon, DPIconIncreaseIcon } from '../../icons';
import Button from '../atoms/Button';
import CardItem from './CardItem';

const CartCardItem = ({ img, title, price, num, id }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <CardItem img={img} />
      <div className="right-item">
        <h6 className="right-item__header">{title}</h6>
        <div className="action-section">
          <DPIconIncreaseIcon onClick={() => dispatch(incrementValue(id))} />
          <span>{num}</span>
          <DPIconDecreaseIcon onClick={() => dispatch(decrementValue(id))} />
        </div>
        <p className="price-tag">{`$${price}`}</p>

        <Button className="cart-btn" onClick={() => dispatch(removeItem(id))}>
          Remove
        </Button>
      </div>
    </Wrapper>
  );
};

export default CartCardItem;

const Wrapper = styled.div`
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
