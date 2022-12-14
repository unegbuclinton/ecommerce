import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES } from '../../constants/fonts';
import { DPIconSocials } from '../../icons';

const Footer = () => {
  return (
    <Wrapper>
      <span>
        <DPIconSocials />
      </span>
      <p className="text">
        support@openui.design +60 825 876 08:00 - 22:00 - Everyday
      </p>
      <FooterContainer>
        <FooterText to="blog">About</FooterText>
        <FooterText to="/blog">Contact</FooterText>
        <FooterText to="/blog">Blog</FooterText>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  .text {
    max-width: 17rem;
    text-align: center;
    font-size: ${FONTSIZES.base};
    padding: 1.783rem 0;
    border-bottom: 1px solid beige;
  }
  span {
    padding-bottom: 2.4rem;
    border-bottom: 1px solid beige;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 0rem 3rem;
  margin-top: 3.2rem;
`;

const FooterText = styled(Link)`
  font-size: ${FONTSIZES.xxlarge};
  text-decoration: none;
  color: ${COLORS['cooper-crayola']};

  &:hover {
    color: #835542;
  }
`;
