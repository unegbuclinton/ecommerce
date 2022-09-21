import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES } from '../../constants/fonts';
import {
  DPIconCall,
  DPIconClose,
  DPIconLocation,
  DPIconSocials,
} from '../../icons';

const MenuDropDown = ({ onClose }) => {
  const Items = [
    {
      header: 'Customer Service',
      icon: <DPIconCall />,
      text: '(234) 803 090 5388',
    },
    {
      header: 'Store location',
      icon: <DPIconLocation />,
      text: 'Store Location',
    },
  ];

  const links = [
    { text: 'STORE', path: '/category' },
<<<<<<< HEAD
    { text: 'BLOG', path: '/blog' },
    { text: 'WISHLIST', path: '/wish-list' },
    { text: 'NEW ARRIVAL', path: '/new-arrival' },
=======
    { text: 'BLOG', path: '/' },
    { text: 'WISHLIST', path: '/' },
    { text: 'NEW ARRIVAL', path: '/' },
>>>>>>> b8a01f8766fd1480f6bb3c802c40890c124f025e
  ];
  return (
    <Wrapper>
      <DPIconClose onClick={onClose} />
      <MenuHeader>OPEN STORE</MenuHeader>
      {links.map(({ text, path }, idx) => (
        <div className="link-wrapper" key={idx}>
          <Link to={path} className="menu-list">
            {text}
          </Link>
        </div>
      ))}

      <div className="info-wrapper">
        {Items?.map(({ header, icon, text }, idx) => (
          <MenuInfo key={idx}>
            <p>{header}</p>
            <div className="menu-info__item">
              {icon}
              <p>{text}</p>
            </div>
          </MenuInfo>
        ))}
      </div>
      <MenuFooter>
        <DPIconSocials />
      </MenuFooter>
    </Wrapper>
  );
};

export default MenuDropDown;

const Wrapper = styled.div`
  position: relative;
  padding: 2.2rem 0rem 2.7rem 1.4rem;
  max-height: 100vh;
  width: 100vw;
  background-color: ${COLORS.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .link-wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 0.6rem;

    .menu-list {
      font-size: ${FONTSIZES.xlarge};
      text-decoration: none;
      color: ${COLORS.black};
      margin-bottom: 4.2rem;
    }
  }
  .info-wrapper {
    padding-bottom: 5.7rem;
  }
`;

const MenuHeader = styled.div`
  font-size: ${FONTSIZES.xxlarge};
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

const MenuInfo = styled.div`
  margin-bottom: 1.5rem;
  p {
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS.grey};
    margin-bottom: 0.5rem;
  }

  .menu-info__item {
    display: flex;
    gap: 1.6rem;
    align-items: center;

    p {
      font-size: ${FONTSIZES.base};
      color: ${COLORS.black};
    }
  }
`;

const MenuFooter = styled.div`
  position: absolute;
  max-width: 16.2rem;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  padding-top: 2.3rem;
  margin-top: 2.7rem;
  border-top: 1px solid ${COLORS['border-color']};
  margin-bottom: 2rem;
`;
