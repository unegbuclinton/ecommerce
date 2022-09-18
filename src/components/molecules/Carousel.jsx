import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const delay = 4500;

  const { dataItem, isLoading } = useSelector((state) => state.landing);
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === dataItem?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index, dataItem]);
  return (
    <>
      <SlideShow>
        {isLoading ? (
          <div>Loading.......</div>
        ) : (
          <SlideShowSlider index={index}>
            {dataItem?.map(({ image, price }, idx) => (
              <Slider key={idx}>
                <img src={image} alt="product" className="carousel-img" />
                <p className="product-price">{`$${price}`}</p>
              </Slider>
            ))}
          </SlideShowSlider>
        )}
      </SlideShow>

      <SlideDots>
        {dataItem?.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
          ></div>
        ))}
      </SlideDots>
    </>
  );
};

export default Carousel;

const SlideShow = styled.div`
  margin: 5rem auto;
  max-width: 99vh;
  overflow: hidden;
`;

const SlideShowSlider = styled.div`
  white-space: nowrap;
  transform: ${({ index }) => `translate3d(${-index * 100}%, 0, 0)`};
  transition: ease 1000ms;
`;

const Slider = styled.div`
  height: 400px;
  display: inline-block;
  width: 100%;
  border-radius: 40px;
  text-align: center;

  .carousel-img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .product-price {
    margin-top: 1.2rem;
    font-size: 3.2rem;
  }
`;

const SlideDots = styled.div`
  text-align: center;

  .slideshowDot {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: #6a0dad;
  }
`;
