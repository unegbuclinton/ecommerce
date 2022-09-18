import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Layout from '../components/layout/layout';
import Modal from '../components/layout/Modal';
import CardItem from '../components/molecules/CardItem';
import OrderMsg from '../components/molecules/OrderMsg';
import { COLORS } from '../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../constants/fonts';
import { DPIconDiscount } from '../icons';

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const { dataItem } = useSelector((state) => state.landing);
  const navigate = useNavigate();
  return (
    <Layout show>
      <Wrapper>
        <Modal show={open} hide={() => setOpen(false)}>
          <OrderMsg />
        </Modal>
        <CheckoutWrapper>
          <CheckoutHeader>CHECKOUT</CheckoutHeader>
          {dataItem?.map(({ price, image, title }, idx) => (
            <CheckoutContainer key={idx}>
              <CardItem img={image} />
              <div className="right-item">
                <h6 className="right-item__header">{title}</h6>

                <p className="price-tag">{`$${price}`}</p>

                <Button className="cart-btn">Remove</Button>
              </div>
            </CheckoutContainer>
          ))}
        </CheckoutWrapper>

        <PromoCode>
          <div className="label">
            <DPIconDiscount />
            <h1>Add Promo code</h1>
          </div>
          <InputValue />
        </PromoCode>

        <PromoCode>
          <div className="label">
            <DPIconDiscount />
            <h1>Delivery Method</h1>
          </div>
          <InputValue />
        </PromoCode>

        <CheckoutTotal>
          <p className="total-text">EST TOTAL :</p>
          <p className="total-value">{`$${dataItem[0].price}`}</p>
        </CheckoutTotal>
        <div className="btn-container">
          <Button className="revert-btn" onClick={() => navigate('/category')}>
            Cancel Order
          </Button>
          <Button className="order-btn" onClick={() => setOpen(true)}>
            Place Order
          </Button>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Checkout;

const Wrapper = styled.div`
  .btn-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .revert-btn {
      background-color: ${COLORS.auburn};
      font-size: ${FONTSIZES.small};
      padding: 1.5rem 2.2rem;
      border-radius: 0.3rem;
      color: ${COLORS.white};
      font-weight: ${FONTWEIGHTS.bold};
    }
    .order-btn {
      background-color: ${COLORS.black};
      font-size: ${FONTSIZES.small};
      padding: 1.5rem 2.2rem;
      border-radius: 0.3rem;
      color: ${COLORS.white};
      font-weight: ${FONTWEIGHTS.bold};
    }
  }
`;
const CheckoutWrapper = styled.div``;

const CheckoutHeader = styled.h1`
  font-size: ${FONTSIZES.xxlarge};
  font-weight: ${FONTWEIGHTS.normal};
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.4rem;
  margin-bottom: 4.7rem;

  .right-item {
    padding-right: 1.5rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20rem;

    &__header {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.normal};
      margin-bottom: 1.8rem;
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

const PromoCode = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 0 1.3rem 0;
  border-top: 1px solid ${COLORS['border-color']};

  .label {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
`;

const InputValue = styled.input`
  border: none;
  outline: none;
  background-color: ${COLORS.whitesmoke};
  height: 4rem;
  border-radius: 0.3rem;
  margin-top: 0.9rem;
  width: 100%;
  padding-left: 1.5rem;
`;

const CheckoutTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 1.8rem;

  .total-text {
    font-size: ${FONTSIZES.small};
  }
  .total-value {
    font-size: ${FONTSIZES.base};
    color: ${COLORS['cooper-crayola']};
    font-weight: ${FONTWEIGHTS.bold};
  }
`;
