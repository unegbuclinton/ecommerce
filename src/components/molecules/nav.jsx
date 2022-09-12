import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import { DPIconCart, DPIconMenu } from '../../icons';

const NavBar = () => {
  return (
    <Wrapper>
      <div>
        <DPIconMenu />
      </div>

      <div>
        <span>3</span>
        <DPIconCart />
      </div>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    position: relative;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -20px;
      right: -20px;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      font-size: ${FONTSIZES.xsmall};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS.white};
      background-color: ${COLORS.auburn};
    }
  }
`;
