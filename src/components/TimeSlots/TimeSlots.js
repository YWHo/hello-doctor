import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';

const ContainerOuter = styled.div`
  display: block;
  margin-top: 16px;
  padding-top: 12px;
  height: 37.95px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const ContainerInner = styled.div`
  display: block;
  height: 42px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
  white-space: nowrap;
`;

const ContainerNoAppointment = styled.div`
  margin-top: 25.19px;
  height: 38.37px;
  padding-right: 12px;
  width: 100%;
`;

const NoAppointment = styled.div`
  background-color: #f7f7f7;
  font-size: 16px;
  line-height: 38.37px;
  height: 38.37px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
`;

export function TimeSlots(props) {
  const { availableSlots = {} } = props;
  const slots = Object.keys(availableSlots).map(key =>
    dayjs(availableSlots[key]).format('HH:mm')
  );

  if (slots.length === 0) {
    return (
      <ContainerNoAppointment>
        <NoAppointment>No appointment available for this date</NoAppointment>
      </ContainerNoAppointment>
    );
  } else {
    return (
      <ContainerOuter>
        <ContainerInner>{slots.join(' | ')}</ContainerInner>
      </ContainerOuter>
    );
  }
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
