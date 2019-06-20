import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';

const ContainerNoAppointment = styled.div`
  margin-top: 25.19px;
  height: 38.37px;
  padding-right: 12px;
  width: 100%;
`;

const NoAppointment = styled.div`
  background-color: #f7f7f7;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 38.37px;
  height: 38.37px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
`;

const ContainerOuter = styled.div`
  display: block;
  margin-top: 4px;
  padding-top: 12px;
  height: 49.95px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const ContainerInner = styled.div`
  display: block;
  height: 53.95px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
  white-space: nowrap;
`;

const ButtonOfTime = styled.button`
  background-color: #f7f7f7;
  border: none;
  border-radius: 25px;
  margin-right: 10px;
  height: 37.95px;
  width: 67.73px;

  :focus {
    outline: none;
  }

  :active {
    background-color: #e6e6e6;
    outline: none;
  }
`;

const TextOfTime = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #8d8d8d;
`;

export function TimeSlots(props) {
  const { availableSlots = {} } = props;
  const slots = Object.keys(availableSlots).map((keyID, idx) => {
    const timeStr = dayjs(availableSlots[keyID]).format('H:mm');
    return (
      <ButtonOfTime key={`tb_${idx}`}>
        <TextOfTime>{timeStr}</TextOfTime>
      </ButtonOfTime>
    );
  });

  if (slots.length === 0) {
    return (
      <ContainerNoAppointment>
        <NoAppointment>No appointment available for this date</NoAppointment>
      </ContainerNoAppointment>
    );
  } else {
    return (
      <ContainerOuter>
        <ContainerInner>{slots}</ContainerInner>
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
