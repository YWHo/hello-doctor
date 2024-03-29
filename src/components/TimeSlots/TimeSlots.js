import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

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
  height: 50px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const ContainerInner = styled.div`
  display: block;
  height: 55px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
  white-space: nowrap;
`;

const ButtonOfTime = styled.button`
  background-color: #f7f7f7;
  border: ${(props) => (props.selected ? '1px solid #8d8d8d' : 'none')};
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
  cursor: pointer;
`;

export function TimeSlots(props) {
  const { availableSlots = {} } = props;
  const { saveSelectedTimeID } = useActions();
  const { selectedTimeID = 'notAvailable' } = useTypedSelector(
    (state) => state.pendingAppointmentReducer,
  );
  const allProps = {
    ...props,
    saveSelectedTimeID,
    selectedTimeID,
  };

  const slots = Object.keys(availableSlots).map((timeID, idx) => {
    const timeStr = dayjs(availableSlots[timeID]).format('H:mm');
    return (
      <ButtonOfTime
        key={`tb_${idx}`}
        selected={timeID === selectedTimeID}
        onClick={() => {
          onButtonClicked(allProps, timeID);
        }}
      >
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

function onButtonClicked(props, timeID) {
  const { saveSelectedTimeID } = props;
  saveSelectedTimeID(timeID);
}

TimeSlots.propTypes = {
  availableSlots: PropTypes.object,
};

export default TimeSlots;
