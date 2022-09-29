import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Layout from '../components/layout/layout';
import BlogCard from '../components/molecules/BlogCard';
import { COLORS } from '../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../constants/fonts';

const Blog = () => {
  const categories = [
    { title: 'Fashion' },
    { title: 'Promo' },
    { title: 'Policy' },
    { title: 'LookBook' },
    { title: 'Black Friday' },
    { title: 'New Arrival' },
  ];
  return (
    <Layout>
      <BlogHeader>Blog</BlogHeader>
      <BlogButtonWrapper>
        {categories?.map(({ title }, idx) => (
          <Button className="blog-btn" key={idx}>
            {title}
          </Button>
        ))}
      </BlogButtonWrapper>

      <BlogCard />
    </Layout>
  );
};

export default Blog;

const BlogHeader = styled.h1`
  font-size: ${FONTSIZES.xxlarge};
  font-weight: ${FONTWEIGHTS.normal};
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

const BlogButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  overflow-x: scroll;

  .blog-btn {
    background-color: ${COLORS['grey-scale']};
    color: ${COLORS.black};
    font-weight: ${FONTWEIGHTS.medium};
    border-radius: 3rem;
    padding: 1.2rem 2.5rem;
    margin-right: 1.5rem;
  }
`;
