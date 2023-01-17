import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

const CheckoutAlert = () => {
  return <Wrapper>Return to Cart to remove Item</Wrapper>;
};

export default CheckoutAlert;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
`;
