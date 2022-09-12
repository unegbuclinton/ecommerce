import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/color';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import img from '../../icons/imgs/img1.jpg';

const SocialMedia = () => {
  return (
    <>
      <MediatText>Follow Us</MediatText>
      <AT>@</AT>
      <Wrapper>
        <MediaItem>
          <p className="media-text">@ejike</p>
        </MediaItem>
        <MediaItem>
          <p className="media-text">@klinton</p>
        </MediaItem>
      </Wrapper>
    </>
  );
};

export default SocialMedia;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
`;
const AT = styled.div`
  text-align: center;
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 2rem;
`;

const MediatText = styled.h1`
  font-size: ${FONTSIZES.lg};
  text-align: center;
  margin-bottom: 2.5rem;
`;
const MediaItem = styled.div`
  position: relative;
  width: 16.4rem;
  height: 16.4rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${img});
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  .media-text {
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: ${COLORS.white};
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.base};
  }
`;
