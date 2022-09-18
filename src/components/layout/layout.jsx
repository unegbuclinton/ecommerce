import React from 'react';
import styled from 'styled-components';
import Footer from '../molecules/Footer';
import NavBar from '../molecules/nav';

const Layout = ({ children, show }) => {
  return (
    <LayoutWrapper>
      <NavBar />
      {children}
      {!show && <Footer />}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 3.2rem 2.5rem 2.5rem 2.6rem;
`;
