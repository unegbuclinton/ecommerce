import React from 'react';
import styled from 'styled-components';
import Footer from '../molecules/Footer';
import NavBar from '../molecules/nav';
import SideBar from '../molecules/SideBar';

const Layout = ({ children, show }) => {
  return (
    <>
      <LayoutWrapper>
        <div className="left-section">
          <SideBar />
        </div>
        <div className="right-section">
          <NavBar />
          {children}
          {!show && <Footer />}
        </div>
      </LayoutWrapper>
    </>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  position: relative;
  min-height: 100vh;
  padding: 3.2rem 2.5rem 2.5rem 2.6rem;

  .left-section {
    display: none;
  }

  .right-section {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    padding: 3.2rem 8.5rem 2.5rem 7.6rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0;

    .left-section {
      display: block;
    }
    .right-section {
      height: 100vh;
      flex: 1;
      padding: 1.2rem;
      overflow-y: scroll;
    }
  }
`;
