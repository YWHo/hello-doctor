import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';

const ContainerOuter = styled.div`
  margin-top: 16px;
  height: 37.95px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const ContainerNoAppointment = styled.div`
  margin-top: 25.19px;
  height: 38.37px;
  padding-right: 19.88px;
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
    return <ContainerOuter>{slots.join(' | ')}</ContainerOuter>;
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
