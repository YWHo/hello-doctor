import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleShowingProfile } from '../../state/actions';
import { getShowingProfile } from '../../state/selectors';

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
  const { dToggleShowingProfile, showingProfile } = props;
  return (
    <Container show={showingProfile}>
      Hello World!
      <ButtonX onClick={() => dToggleShowingProfile(false)}>&#10005;</ButtonX>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    showingProfile: getShowingProfile(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dToggleShowingProfile: status => dispatch(toggleShowingProfile(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorProfile);
