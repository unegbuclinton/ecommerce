import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Layout from '../components/layout/layout';
import CardItem from '../components/molecules/CardItem';
import DetailInfo from '../components/molecules/DetailInnfo';
import { COLORS } from '../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../constants/fonts';
import { addItem } from '../features/addToCart';
import { addItemToWishList } from '../features/wishList';
import { DPIconBack, DPIconFullView } from '../icons';

const SingleItem = () => {
  const navigate = useNavigate();
  const infoData = [
    {
      header: 'Delivery',
      text: `Delivery Cost - $25.99 Ready for your delivery between 16 Sep & 20 Sep when you order within the next 24hrDelivery Cost - $25.99 Ready for your delivery between 16 Sep & 20 Sep when you order within the next 24hr`,
    },
    {
      header: 'Pickup Station',
      text: '  Delivery Cost - $15.99 Ready for your pickup between 16 Sep & 20 Sep when you order within the next 24hr',
    },
    {
      header: 'Return Policy',
      text: '  Free return within 15 days for official Store item and 7 days for other eligiblle items',
    },
  ];
  const { productItem } = useSelector((state) => state.product);

  const { title, price, image, description, rating } = productItem;
  const dispatch = useDispatch();

  return (
    <Layout>
      <DPIconBack
        style={{ margin: '2rem 0', cursor: 'pointer' }}
        onClick={() => navigate('/category')}
      />
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

        <div className="single-btns">
          <Button
            className="item-btn"
            onClick={() => dispatch(addItem(productItem))}
          >
            Add To Cart
          </Button>
          <Button
            className="item-btn"
            onClick={() => dispatch(addItemToWishList(productItem))}
          >
            Add To Wish List
          </Button>
        </div>
        <div className="care">
          <h3 className="care-header">Care</h3>
          <h3 className="care-text">
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.
          </h3>
        </div>
        {infoData?.map(({ text, header }, idx) => (
          <DetailInfo key={idx} text={text} header={header} />
        ))}
        <InterestHeader> You may also like </InterestHeader>
        <Interest>
          <CardItem details img={image} title={title} price={`$${price}`} />
        </Interest>
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
    margin-top: 3rem;

    &:hover {
      background-color: ${COLORS.white};
      color: ${COLORS.black};
    }
  }

  .care {
    margin-top: 5.6rem;
    margin-bottom: 1.5rem;
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

  @media only screen and (min-width: 1024px) {
    .single-btns {
      display: flex;
      gap: 2rem;
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

  @media only screen and (min-width: 768px) {
    max-width: 40rem;
    margin: 4.5rem auto;
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

const Interest = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1.6rem;
  margin-bottom: 4rem;
`;

const InterestHeader = styled.div`
  font-size: ${FONTSIZES.xxlarge};
  margin: 3rem 0;
  text-align: center;
`;
