import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES } from '../../constants/fonts';
import { DPIconBookMark } from '../../icons';
import img from '../../icons/imgs/fashoin.jpg';

const BlogCard = () => {
  return (
    <Wrapper>
      <BlogImg>
        <span>
          <DPIconBookMark />
        </span>
        <p>2021 Style Guide: The Biggest Fall Trends</p>
      </BlogImg>
    </Wrapper>
  );
};

export default BlogCard;

const Wrapper = styled.div``;

const BlogImg = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${COLORS.white};
  font-size: ${FONTSIZES.lg};
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  width: 100%;
  height: 40rem;
  background-size: cover;
  z-index: 1;
  padding: 1.5rem 1.2rem;
  margin-bottom: 2rem;

  span {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 85%,
      rgba(15, 15, 15, 1) 100%
    );
    opacity: 0.9;
    z-index: -1;
  }
`;
