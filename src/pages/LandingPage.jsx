import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Layout from '../components/layout/layout';
import Carousel from '../components/molecules/Carousel';
import LoadingScreen from '../components/molecules/LoadState';
import OpenStore from '../components/molecules/OpenStore';
import SocialMedia from '../components/molecules/SocialMedia';
import { FONTSIZES } from '../constants/fonts';
import { getSomeProducts } from '../features/landingPageSlice/landingSlice';
import { DPIconThread } from '../icons';

const LandingPage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getSomeProducts());
  }, [dispatch]);

  setTimeout(() => {
    setShow(true);
  }, 2000);

  return (
    <>
      {!show ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <Wrapper>
            <Carousel />
            <ButtonWrapper>
              <Button className="page-btn">EXPLORE COLLECTION</Button>
            </ButtonWrapper>
            <OpenStore />
            <div className="thread">
              <DPIconThread />
            </div>
            <SocialMedia />
          </Wrapper>
        </Layout>
      )}
    </>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  .thread {
    display: flex;
    justify-content: center;
    margin-top: 3.3rem;
    margin-bottom: 4.4rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.3rem;
  margin-bottom: 11rem;

  .page-btn {
    padding: 0.8rem 3rem;
    border-radius: 3rem;
    backdrop-filter: blur(4px);
    font-size: ${FONTSIZES.base};
  }
`;
