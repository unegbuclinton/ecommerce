import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import CardItem from '../components/molecules/CardItem';
import CategoryMenu from '../components/molecules/CategoryMenu';
import { FONTSIZES, FONTWEIGHTS } from '../constants/fonts';
import { DPIconArrowDown } from '../icons';

const Category = () => {
  const [category, setCategory] = useState('All');
  const { dataItem } = useSelector((state) => state.landing);

  const [show, setShow] = useState(false);
  return (
    <Layout>
      <CategoryHeader>OpenStore</CategoryHeader>

      <CategorySort onClick={() => setShow((prev) => !prev)}>
        <p>{category}</p>
        <DPIconArrowDown />
        <CategoryMenuWrapper show={show}>
          <CategoryMenu
            onClick={() => setCategory('All')}
            onClick1={() => setCategory('Men wears')}
            onClick2={() => setCategory('Woman wears')}
          />
        </CategoryMenuWrapper>
      </CategorySort>
      <CardItemContainer>
        {dataItem?.map(({ image, price, title }) => (
          <CardItem details img={image} title={title} price={`$${price}`} />
        ))}
      </CardItemContainer>
    </Layout>
  );
};

export default Category;

const CategoryHeader = styled.div`
  font-size: ${FONTSIZES.xxlarge};
  font-weight: ${FONTWEIGHTS.normal};
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

const CategorySort = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 3.5rem;

  p {
    font-size: ${FONTSIZES.xlarge};
  }
`;

const CategoryMenuWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  height: ${({ show }) => (show ? '15rem' : '0')};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const CardItemContainer = styled.div`
  display: grid;
  gap: 1.3rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 7.5rem;
`;
