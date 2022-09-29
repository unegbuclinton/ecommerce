import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Layout from '../components/layout/layout';
import Carousel from '../components/molecules/Carousel';
import LoadingScreen from '../components/molecules/LoadState';
import OpenStore from '../components/molecules/OpenStore';
import SocialMedia from '../components/molecules/SocialMedia';
import { FONTSIZES, FONTWEIGHTS } from '../constants/fonts';
import { allStoreProducts } from '../features/category';
import { getSomeProducts } from '../features/landingPageSlice/landingSlice';
import { DPIconDown, DPIconThread } from '../icons';

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getSomeProducts());
    dispatch(allStoreProducts());
  }, [dispatch]);

  setTimeout(() => {
    setShow(true);
  }, 3500);

  return (
    <>
      {!show ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <Wrapper>
            <Carousel />
            <div className="arrow-container">
              <DPIconDown className="arrow" />
            </div>
            <ButtonWrapper>
              <Button
                className="page-btn"
                onClick={() => navigate('/category')}
              >
                Start Shopping
              </Button>
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

  .arrow-container {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 4rem;

    .arrow {
      animation: bounce 0.5s;
      animation-direction: alternate;
      animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
      animation-iteration-count: infinite;

      @keyframes bounce {
        from {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        to {
          -webkit-transform: translate3d(0, 20px, 0);
          transform: translate3d(0, 20px, 0);
        }
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.3rem;
  margin-bottom: 11rem;

  .page-btn {
    padding: 0.8rem 3rem;
    border-radius: 3rem;
    backdrop-filter: blur(4px);
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.bold};
  }
`;
