import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import { DPIconCart, DPIconMenu } from '../../icons';
import Cart from './Cart';
import MenuDropDown from './MenuDropDown';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const ChangeNavbar = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', ChangeNavbar);
  return (
    <>
      <CartMenu cart={cart}>
        <Cart onClose={() => setCart(false)} />
      </CartMenu>
      <Wrapper navbar={navbar}>
        <div>
          <DPIconMenu onClick={() => setShow(true)} />
        </div>

        <div>
          <span>3</span>
          <DPIconCart onClick={() => setCart(true)} />
        </div>
      </Wrapper>
      <DropDoenMenu show={show}>
        <MenuDropDown onClose={() => setShow(false)} />
      </DropDoenMenu>
    </>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background: ${({ navbar }) => (navbar ? COLORS.white : 'transparent')};
  padding-top: 3rem;

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

const DropDoenMenu = styled.div`
  position: fixed;
  top: -5px;
  left: 0;
  height: ${({ show }) => (show ? '100vh' : '0')};
  overflow: hidden;
  z-index: 2;
  transition: 0.4s ease-in-out;
`;

const CartMenu = styled.div`
  position: fixed;
  top: -5px;
  left: 0;
  transform: ${({ cart }) => (cart ? 'traslateX(0)' : 'translateX(-100%)')};
  overflow: hidden;
  z-index: 2;
  transition: 0.4s ease-in-out;
`;
