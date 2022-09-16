import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Layout from '../components/layout/layout';
import { COLORS } from '../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../constants/fonts';
import { DPIconArrow_up, DPIconFullView } from '../icons';

const SingleItem = () => {
  const { dataItem } = useSelector((state) => state.landing);

  const { title, price, image, description, rating } = dataItem[0];
  return (
    <Layout>
      <Container>
        <Card>
          <SingleCardImg src={image} />
          <DPIconFullView className="icon" />
        </Card>
        <ItemHeader>{title}</ItemHeader>
        <ItemDescription>{description}</ItemDescription>
        <ItemContainer>
          <div>
            <p className="preamble">Cost :</p>
            <span className="value">{`$${price}`}</span>
          </div>

          <div>
            <p className="preamble">Rating :</p>
            <span className="value">{rating.rate}</span>
          </div>
        </ItemContainer>

        <Button className="item-btn">Add To Cart</Button>
        <div className="care">
          <h3 className="care-header">Care</h3>
          <h3 className="care-text">
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.
          </h3>
        </div>
        <InfoWrapper>
          <div className="info-wrapper__top">
            <InfoHeader> Delivery </InfoHeader>
            <DPIconArrow_up />
          </div>

          <InfoText>
            Delivery Cost - $25.99 Ready for your delivery between 16 Sep & 20
            Sep when you order within the next 24hrDelivery Cost - $25.99 Ready
            for your delivery between 16 Sep & 20 Sep when you order within the
            next 24hr
          </InfoText>
        </InfoWrapper>
      </Container>
    </Layout>
  );
};

export default SingleItem;

const Container = styled.div`
  .item-btn {
    width: 100%;
    padding: 1.5rem 0;
    background-color: ${COLORS.black};
    color: ${COLORS.white};
    border-radius: 0.4rem;
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.medium};
  }

  .care {
    margin-top: 5.6rem;
    &-header {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.bold};
      margin-bottom: 1rem;
    }
    &-text {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
    }
  }
`;
const Card = styled.div`
  position: relative;
  padding: 3rem 3.4rem 6.8rem 2.2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 8.5rem;

  .icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const ItemHeader = styled.h1`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  margin-top: 2.4rem;
`;
const ItemDescription = styled.p`
  font-size: ${FONTSIZES.base};
  font-weight: ${FONTWEIGHTS.normal};
  margin-top: 3.1rem;
`;
const SingleCardImg = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 2rem;
`;
const InfoWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
`;
const InfoHeader = styled.h1``;
const InfoText = styled.p`
  font-size: ${FONTSIZES.small};
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.4rem;
  margin-bottom: 2.9rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    .preamble {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.medium};
    }

    .value {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS.auburn};
    }
  }
`;
