import React from 'react';
import styled from 'styled-components';
import DateSelector from '../DateSelector';
import NavBar from '../NavBar';
import MonthBar from '../MonthBar';
import MonthCalendar from '../MonthCalendar';
import MonthContainer from '../MonthContainer';
import TimeCard from '../TimeCard';
import DoctorProfile from '../DoctorProfile';
import useTypedSelector from '../../hooks/useTypedSelector';
import { schedule as scheduleType } from '../../state/state-interface';

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  min-width: 300px;
`;

export default function AppointmentPage() {
  const { schedules = [] } = useTypedSelector(
    (state) => state.timeSlotsReducer,
  );
  return (
    <Container>
      <NavBar />
      <MonthContainer>
        <MonthBar />
        <MonthCalendar />
      </MonthContainer>
      <DateSelector />
      {showTimeCards({ schedules })}
      <DoctorProfile />
    </Container>
  );
}

interface showTimeCardsProps {
  schedules: scheduleType[];
}

function showTimeCards(props: showTimeCardsProps) {
  const { schedules = [] } = props;
  return Array.from(schedules).map((scheduleObj, idx) => {
    return <TimeCard meetSchedule={scheduleObj} key={`tc_${idx}`} />;
  });
}
