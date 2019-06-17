import React from 'react';
import styled from 'styled-components';
import iconGoBack from '../../assets/icon_go_back.svg';
import iconHelp from '../../assets/icon_help.svg';
import vensaLogo from '../../assets/vensa_logo.svg';

const Container = styled.div`
  background-color: #3cb9c0;
  background-image: linear-gradient(to right, #3cb9c0, #2caaca);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const ButtonBack = styled.button`
  border: none;
  background-color: Transparent;
  margin-left: 0.4rem;
  margin-top: 0.4rem;
  text-align: center;
`;

const ButtonHelp = styled.button`
  border: none;
  border-right: 5px solid #fff;
  height: 20px;
  background-color: Transparent;
  text-align: center;
`;

export default function NavBar(props) {
  return (
    <Container>
      <ButtonBack>
        <img src={iconGoBack} alt='Go Back' />
      </ButtonBack>
      <img src={vensaLogo} alt='Vensa' />
      <ButtonHelp>
        <img src={iconHelp} alt='Help' />
      </ButtonHelp>
    </Container>
  );
}
