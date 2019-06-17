import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import selectors from '../../state/selectors';
import NavBar from '../NavBar';
import MonthBar from '../MonthBar';
import FiveDayBar from '../FiveDaysBar';

const Container = styled.div`
  height: 100vh;
  min-width: 375px;
`;

export function AppointmentPage(props) {
  const { schedules = [] } = props;
  const nameList = Array.from(schedules).map((item, idx) => {
    return (
      <div key={`app_${idx}`}>
        <div>Name: {item.Name}</div>
        <div>Title: {item.Title}</div>
        <br />
      </div>
    );
  });

  return (
    <Container>
      <NavBar />
      <MonthBar />
      <FiveDayBar />
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
