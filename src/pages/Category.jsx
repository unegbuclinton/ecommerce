import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import Pagination from '../components/layout/pagination';
import CardItem from '../components/molecules/CardItem';
import CategoryMenu from '../components/molecules/CategoryMenu';
import { FONTSIZES, FONTWEIGHTS } from '../constants/fonts';
import { getSingleProduct } from '../features/productSlice';
import { DPIconArrowDown } from '../icons';

const Category = () => {
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.category);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const singleProduct = (id) => {
    dispatch(getSingleProduct(id));
    navigate(`/category/${id}`);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = allProducts?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {currentPosts?.map(({ image, price, title, id }, idx) => (
          <CardItem
            key={idx}
            details
            img={image}
            title={title}
            price={`$${price}`}
            onClick={() => singleProduct(id)}
          />
        ))}
      </CardItemContainer>

      <Pagination
        postPerPage={postPerPage}
        totalPosts={allProducts?.length}
        paginate={paginate}
      />
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
