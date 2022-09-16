import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

const CategoryMenu = ({ onClick1, onClick2, onClick }) => {
  return (
    <MenuWrapper>
      <MenuItem>
        <MenuText onClick={onClick}>All</MenuText>
        <MenuText onClick={onClick1}>Men Wears</MenuText>
        <MenuText onClick={onClick2}>Woman Wears</MenuText>
      </MenuItem>
    </MenuWrapper>
  );
};

export default CategoryMenu;

const MenuWrapper = styled.div`
  background-color: ${COLORS.auburn};
  max-width: 18rem;
  border-radius: 0.4rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MenuItem = styled.div``;

const MenuText = styled.p`
  font-size: ${FONTSIZES.xsmall};
  font-weight: ${FONTWEIGHTS.medium};
  padding: 1.2rem 0.8rem 1rem 0.8rem;
  color: ${COLORS.white};
`;
