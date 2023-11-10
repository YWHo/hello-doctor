import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getSchedules } from '../../state/timeSlots';
import DateSelector from '../DateSelector';
import NavBar from '../NavBar';
import MonthBar from '../MonthBar';
import MonthCalendar from '../MonthCalendar';
import MonthContainer from '../MonthContainer';
import TimeCard from '../TimeCard';
import DoctorProfile from '../DoctorProfile';

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  min-width: 300px;
`;

export function AppointmentPage(props) {
  return (
    <Container>
      <NavBar />
      <MonthContainer>
        <MonthBar />
        <MonthCalendar />
      </MonthContainer>
      <DateSelector />
      {showTimeCards(props)}
      <DoctorProfile />
    </Container>
  );
}

function showTimeCards(props) {
  const { schedules = [] } = props;
  return Array.from(schedules).map((scheduleObj, idx) => {
    return <TimeCard meetSchedule={scheduleObj} key={`tc_${idx}`} />;
  });
}

AppointmentPage.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  return {
    schedules: getSchedules(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
