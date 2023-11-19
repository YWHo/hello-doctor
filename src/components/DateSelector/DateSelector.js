import React from 'react';
import styled from 'styled-components';
import DaySlots from '../DaySlots';
import PartsOfDayBar from '../PartsOfDayBar';
import useTypedSelector from '../../hooks/useTypedSelector';

const Container = styled.div`
  background-color: #3cb9c0;
  background-image: linear-gradient(to right, #3cb9c0, #2caaca);
  height: ${(props) => (props.$show ? '148px' : 0)};
  margin-bottom: 8px;
  box-shadow: 1px 5px 8px #cccccc;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transition-delay: ${(props) => (props.$show ? '1s' : 0)};
`;

export function DateSelector() {
  const { showingCalendar } = useTypedSelector((state) => state.uiShowReducer);

  return (
    <Container $show={!showingCalendar}>
      <DaySlots />
      <PartsOfDayBar />
    </Container>
  );
}

export default DateSelector;
