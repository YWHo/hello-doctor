import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonCircle = styled.button`
  background-color: #3cb9c0;
  border: none;
  border-radius: 50%;
  color: #fff;
  height: 72px;
  width: 72px;
  position: fixed;
  z-index: 20;
  top: 48%;
  left: 48%;
  opacity: 0.9;

  :focus {
    outline: none;
  }

  :active {
    background-color: #31969b;
    outline: none;
  }

  @media (max-width: 650px) {
    left: 45%;
  }

  @media (max-width: 450px) {
    left: 43%;
  }

  @media (max-width: 345px) {
    left: 40%;
  }
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  font-weight: 300;
  padding-right: 3px;
  padding-bottom: 3px;
`;

export default function ButtonXBig(props) {
  const { onClick } = props;

  return (
    <ButtonCircle onClick={onClick}>
      <Label>&#10005;</Label>
    </ButtonCircle>
  );
}

ButtonXBig.propTypes = {
  onClick: PropTypes.func.isRequired,
};
