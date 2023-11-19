import React from 'react';
import styled from 'styled-components';
import { DAY } from '../../shared/constants';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  padding: 0 8px;
  margin: 12px 4px;
`;

const Button = styled.button`
  height: 38px;
  background-color: inherit;
  color: #fff;
  cursor: pointer;
  border: ${(props) => (props.selected ? '1px solid #fff' : 'none')};
  border-radius: 50px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;

  :focus {
    outline: none;
  }

  :active {
    outline: none;
  }

  :disabled {
    color: #7bcadb;
    border-style: none;
  }
`;

export function PartsOfDayBar() {
  const { saveSelectedDayPart } = useActions();
  const { selectedDayPart } = useTypedSelector(
    (state) => state.pendingAppointmentReducer,
  );
  const { hasAfternoonTime, hasEveningTime, hasMorningTime, schedules } =
    useTypedSelector((state) => state.timeSlotsReducer);
  const allProps = {
    hasAfternoonTime,
    hasEveningTime,
    hasMorningTime,
    saveSelectedDayPart,
    schedules,
    selectedDayPart,
  };
  return (
    <Container>
      {showMorningButton(allProps)}
      {showAfternoonButton(allProps)}
      {showEveningButton(allProps)}
    </Container>
  );
}

function showMorningButton(props) {
  const { hasMorningTime, selectedDayPart = DAY.MORNING } = props;
  const selected = hasMorningTime && selectedDayPart === DAY.MORNING;

  return (
    <Button
      disabled={!hasMorningTime}
      selected={selected}
      onClick={() => {
        if (hasMorningTime) {
          onDayPartClicked(props, DAY.MORNING);
        }
      }}
    >
      Morning
    </Button>
  );
}

function showAfternoonButton(props) {
  const {
    hasAfternoonTime,
    hasMorningTime,
    selectedDayPart = DAY.MORNING,
  } = props;
  const selected =
    hasAfternoonTime && (!hasMorningTime || selectedDayPart === DAY.AFTERNOON);

  return (
    <Button
      disabled={!hasAfternoonTime}
      selected={selected}
      onClick={() => {
        if (hasAfternoonTime) {
          onDayPartClicked(props, DAY.AFTERNOON);
        }
      }}
    >
      Afternoon
    </Button>
  );
}

function showEveningButton(props) {
  const {
    hasAfternoonTime,
    hasMorningTime,
    hasEveningTime,
    selectedDayPart = DAY.MORNING,
  } = props;
  const selected =
    hasEveningTime &&
    ((!hasMorningTime && !hasAfternoonTime) || selectedDayPart === DAY.EVENING);

  return (
    <Button
      disabled={!hasEveningTime}
      selected={selected}
      onClick={() => {
        if (hasEveningTime) {
          onDayPartClicked(props, DAY.EVENING);
        }
      }}
    >
      Evening
    </Button>
  );
}

function onDayPartClicked(props, dayPart) {
  const { saveSelectedDayPart } = props;
  saveSelectedDayPart(dayPart);
}

export default PartsOfDayBar;
