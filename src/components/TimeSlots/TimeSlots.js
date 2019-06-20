import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';

const ContainerOuter = styled.div`
  background-color: #fcfcfc;
  margin-top: 16px;
  height: 37.95px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export function TimeSlots(props) {
  const { availableSlots } = props;
  const slots = Object.keys(availableSlots).map(key =>
    dayjs(availableSlots[key]).format('HH:mm')
  );
  return <ContainerOuter>{slots.join(' | ')}</ContainerOuter>;
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
