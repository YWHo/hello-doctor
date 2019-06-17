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
  padding: 0.4rem;
`;

const Button = styled.button`
  border: none;
  background-color: Transparent;
  text-align: center;
`;

const ContainerHelp = styled.div`
  border-right: 5px solid #fff;
  height: 20px;
  padding-right: 0.2rem;
  vertical-align: middle;
`;

export default function NavBar(props) {
  return (
    <Container>
      <Button>
        <img src={iconGoBack} alt='Go Back' />
      </Button>
      <img src={vensaLogo} alt='Vensa' />
      <Button>
        <ContainerHelp>
          <img src={iconHelp} alt='Help' />
        </ContainerHelp>
      </Button>
    </Container>
  );
}
