import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

const SideBar = () => {
  const links = [
    { text: 'STORE', path: '/category' },
    { text: 'BLOG', path: '/blog' },
    { text: 'WISHLIST', path: '/wish-list' },
    { text: 'NEW ARRIVAL', path: '/new-arrival' },
  ];

  return (
    <>
      <SideBarContainer>
        <SideBarInfo>
          <SideBarProfileText>OPEN STORE</SideBarProfileText>
        </SideBarInfo>
        {links?.map(({ text, path, icon }, idx) => (
          <NavLink
            key={idx}
            className={({ isActive }) =>
              isActive ? 'nav-links--selected' : 'nav-links'
            }
            to={path}
          >
            {icon} {text}
          </NavLink>
        ))}
      </SideBarContainer>
    </>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 25rem;
  height: 100vh;
  background-color: ${COLORS.auburn};

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    text-decoration: none;
    font-size: ${FONTSIZES.lg};
    margin-bottom: 3rem;
    color: ${COLORS.white};
    padding: 1.5rem 0 1.5rem 1.2rem;

    &--selected {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      text-decoration: none;
      font-size: ${FONTSIZES.lg};
      margin-bottom: 3rem;
      color: ${COLORS['cooper-crayola']};
      font-weight: ${FONTWEIGHTS.bold};
      padding: 1.5rem 0 1.5rem 1.2rem;

      background-color: ${COLORS.frosbite};
      color: ${COLORS.white};
    }

    &:hover {
      background-color: ${COLORS.frosbite};
      color: ${COLORS.white};
    }
  }

  .logout-wrapper {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem 0 1.5rem 1.2rem;
    color: ${COLORS.white};
    font-size: ${FONTSIZES.lg};
    cursor: pointer;
  }
`;

const SideBarInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin: 2rem 0;
`;

const SideBarProfileText = styled.p`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
`;
