import React, { useState } from 'react';
import styled from 'styled-components';
import { FONTSIZES } from '../../constants/fonts';
import { DPIconArrowUp } from '../../icons';

const DetailInfo = ({ header, text }) => {
  const [showData, setShowData] = useState(false);

  return (
    <InfoWrapper showData={showData}>
      <div
        className="info-wrapper__top"
        onClick={() => setShowData((prev) => !prev)}
      >
        <InfoHeader> {header} </InfoHeader>
        <DPIconArrowUp className="info-icon" style={{ cursor: 'pointer' }} />
      </div>

      <InfoText showData={showData}>{text}</InfoText>
    </InfoWrapper>
  );
};

export default DetailInfo;

const InfoWrapper = styled.div`
  margin-top: 2rem;

  .info-wrapper__top {
    display: flex;
    justify-content: space-between;

    .info-icon {
      transform: ${({ showData }) =>
        showData ? 'rotate(180deg)' : 'rotate(90deg)'};
    }
  }
`;
const InfoHeader = styled.h1`
  font-size: ${FONTSIZES.base};
`;

const InfoText = styled.p`
  height: ${({ showData }) => (showData ? '10rem' : '0')};
  overflow: hidden;
  font-size: ${FONTSIZES.small};
  padding-left: 1rem;
  margin-top: 1rem;
  transition: height 0.2s ease-in-out;
`;
