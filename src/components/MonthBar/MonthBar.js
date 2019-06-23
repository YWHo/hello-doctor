import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import calendarIcon from '../../assets/calendar_icon.svg';
import MonthCalendar from '../MonthCalendar';
import { getSelectedDate } from '../../state/selectors';

const Container = styled.div`
  background-color: #177d91;
  padding: 0.4rem;
`;

const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 39px;
`;

const Month = styled.div`
  color: #fff;
  font-family: 'Roboto', sans-serif;
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
      <ContainerTop>
        <Month>{month}</Month>
        <Icon src={calendarIcon} alt='Calendar' />
      </ContainerTop>
      <MonthCalendar />
    </Container>
  );
}

MonthBar.propTypes = {
  selectedDate: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedDate: getSelectedDate(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthBar);
