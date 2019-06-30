import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ButtonX = styled.button`
  background-color: #3cb9c0;
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  position: absolute;
  z-index: 20;
  top: 48%;
  left: 48%;
  height: 72px;
  width: 72px;
  font-size: 45px;
  line-height: 72px;
  outline: none;

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

export function DoctorProfile(props) {
  return (
    <Container show={false}>
      Hello World!
      <ButtonX>&#10005;</ButtonX>
    </Container>
  );
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorProfile);
