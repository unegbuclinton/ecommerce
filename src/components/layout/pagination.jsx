import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const [activeTab, setActiveTab] = useState(0);
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    PageNumbers.push(i);
  }
  return (
    <PaginationWrapper>
      {PageNumbers?.map((number, index) => (
        <PaginationButton
          key={index}
          active={activeTab === index}
          onClick={() => {
            paginate(number);
            setActiveTab(index);
          }}
        >
          {number}
        </PaginationButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 15rem;
`;

const PaginationButton = styled.div`
  max-width: 4rem;
  padding: 1rem;
  background-color: transparent;
  font-size: ${FONTSIZES.xsmall};
  border: 1px solid ${COLORS.black};
  font-weight: ${FONTWEIGHTS.medium};

  ${({ active }) =>
    active &&
    css`
      background-color: ${COLORS.black};
      color: ${COLORS.white};
    `}
`;
