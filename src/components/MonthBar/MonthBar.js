import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import calendarIcon from '../../assets/calendar_icon.svg';
import * as selectors from '../../state/selectors';

const Container = styled.div`
  background-color: #177d91;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 39px;
  padding: 0.4rem;
`;

const Month = styled.div`
  color: #fff;
  font-size: 16px;
`;

const Icon = styled.img`
  margin-bottom: 0.1rem;
`;

export function MonthBar(props) {
  const { selectedDate = dayjs() } = props;
  const month = dayjs(selectedDate)
    .format('MMMM')
    .toUpperCase();

  return (
    <Container>
      <Month>{month}</Month>
      <Icon src={calendarIcon} alt='Calendar' />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    selectedDate: selectors.getSelectedDate(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthBar);
