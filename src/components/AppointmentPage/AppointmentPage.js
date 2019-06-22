import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getSchedules } from '../../state/selectors';
import DateSelector from '../DateSelector';
import NavBar from '../NavBar';
import MonthBar from '../MonthBar';
import TimeCard from '../TimeCard';

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  min-width: 300px;
`;

export function AppointmentPage(props) {
  return (
    <Container>
      <NavBar />
      <MonthBar />
      <DateSelector />
      {showTimeCards(props)}
    </Container>
  );
}

function showTimeCards(props) {
  const { schedules = [] } = props;
  return Array.from(schedules).map((scheduleObj, idx) => {
    return <TimeCard meetSchedule={scheduleObj} key={`tc_${idx}`} />;
  });
}

const mapStateToProps = state => {
  return {
    schedules: getSchedules(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentPage);
