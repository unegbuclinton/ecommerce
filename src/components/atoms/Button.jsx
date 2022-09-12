import React from 'react';
import styled from 'styled-components';

const Button = ({ type, className, onClick, children }) => {
  return (
    <ButtonTab type={type} className={className} onClick={onClick}>
      {children}
    </ButtonTab>
  );
};

export default Button;

const ButtonTab = styled.button`
  outline: none;
  border: none;
`;
