import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  background-color: pink;
  margin-top: 16px;
  height: 37.95px;
  width: 100%;
`;

export function TimeSlots(props) {
  return <Container></Container>;
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
)(TimeSlots);
