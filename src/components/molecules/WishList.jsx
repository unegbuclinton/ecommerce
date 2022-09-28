import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { singleProduct } from '../../api/singleProduct';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import { removeItemFromWishList } from '../../features/wishList';

import Layout from '../layout/layout';
import WishListCard from './WishListCard';

const WishList = () => {
  const { wishListItems } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  return (
    <Layout>
      <WishlistHeader>WISHLIST</WishlistHeader>

      {!!wishListItems?.length ? (
        <WIshListContainer>
          {wishListItems?.map(({ image, price, title, id }, idx) => (
            <WishListCard
              key={idx}
              details
              img={image}
              title={title}
              price={`$${price}`}
              toItem={() => singleProduct(id)}
              onClick={() => dispatch(removeItemFromWishList(id))}
            />
          ))}
        </WIshListContainer>
      ) : (
        <WishListEmpty>You have no item in your Wish bag</WishListEmpty>
      )}
    </Layout>
  );
};

export default WishList;

const WishlistHeader = styled.div`
  font-size: ${FONTSIZES.xxlarge};
  font-weight: ${FONTWEIGHTS.normal};
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

const WIshListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin-bottom: 7.5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const WishListEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  text-align: center;
  padding: 2rem;
  margin-bottom: 8rem;
`;
