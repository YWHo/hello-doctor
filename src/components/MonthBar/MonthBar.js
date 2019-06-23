import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import calendarIcon from '../../assets/calendar_icon.svg';
import MonthCalendar from '../MonthCalendar';
import { getSelectedDate, getShowingCalendar } from '../../state/selectors';
import { toggleShowingCalendar } from '../../state/actions';

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
      <ContainerTop onClick={() => onMonthBarClicked(props)}>
        <Month>{month}</Month>
        <Icon src={calendarIcon} alt='Calendar' />
      </ContainerTop>
      <MonthCalendar />
    </Container>
  );
}

function onMonthBarClicked(props) {
  const { dToggleShowingCalendar, isShowingCalendar } = props;
  dToggleShowingCalendar(!isShowingCalendar);
}

MonthBar.propTypes = {
  selectedDate: PropTypes.object
};

const mapStateToProps = state => {
  return {
    isShowingCalendar: getShowingCalendar(state),
    selectedDate: getSelectedDate(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dToggleShowingCalendar: status => dispatch(toggleShowingCalendar(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthBar);
