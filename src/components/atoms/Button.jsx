import React from 'react';
import styled from 'styled-components';

const Button = ({ type, className, onClick, children, disabled }) => {
  return (
    <ButtonTab
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonTab>
  );
};

export default Button;

const ButtonTab = styled.button`
  outline: none;
  border: none;
`;
