import React from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import styled from 'styled-components';
import * as selectors from '../../state/selectors';
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
  const { schedules = [] } = props;
  const nameList = Array.from(schedules).map((item, idx) => {
    const { AvailableSlots = {} } = item;
    const slots = Object.keys(AvailableSlots).map(key =>
      dayjs(AvailableSlots[key]).format('HH:mm')
    );
    return (
      <div key={`app_${idx}`}>
        <div>Name: {item.Name}</div>
        <div>Title: {item.Title}</div>
        <div>Available Slots: {slots.join(' | ')}</div>
        <br />
      </div>
    );
  });

  return (
    <Container>
      <NavBar />
      <MonthBar />
      <DateSelector />
      <TimeCard />
      {nameList}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    schedules: selectors.getSchedules(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentPage);
