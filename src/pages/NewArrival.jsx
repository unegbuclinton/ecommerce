import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import { FONTSIZES } from '../constants/fonts';

const NewArrival = () => {
  return (
    <Layout>
      <Wrapper>
        <p>We would notify you when we have new arrival</p>
      </Wrapper>
    </Layout>
  );
};

export default NewArrival;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  p {
    font-size: ${FONTSIZES.lg};
    font-weight: 700;
  }
`;
