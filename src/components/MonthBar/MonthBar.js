import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import calendarIcon from '../../assets/calendar_icon.svg';
import { getSelectedDate, getShowingCalendar } from '../../state/selectors';
import { saveSelectedDate, toggleShowingCalendar } from '../../state/actions';

const Container = styled.div`
  background-color: #177d91;
  padding: 0.2rem 16px;
`;

const ContainerView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 39px;
`;

const MonthSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-connect: flex-start;
  align-items: center;
  height: 39px;
`;

const Month = styled.div`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border-bottom: ${props =>
    props.selected ? '3px solid #33CCCC' : '3px solid #177d91'};
  margin-right: 24px;
  padding-bottom: ${props => (props.expanded ? '5.5px' : 0)};
`;

const Icon = styled.img`
  margin-bottom: 0.1rem;
`;

export function MonthBar(props) {
  const { isShowingCalendar } = props;
  const view = isShowingCalendar
    ? showExpandView(props)
    : showCollapseView(props);

  return <Container>{view}</Container>;
}

function showCollapseView(props) {
  const { isShowingCalendar, selectedDate = dayjs() } = props;
  const selectedMonth = dayjs(selectedDate)
    .format('MMMM')
    .toUpperCase();

  return (
    <ContainerView onClick={() => onMonthBarClicked(props)}>
      <Month expanded={isShowingCalendar}>{selectedMonth}</Month>
      <Icon src={calendarIcon} alt='Calendar' />
    </ContainerView>
  );
}

function showExpandView(props) {
  const { isShowingCalendar, selectedDate = dayjs(), today = dayjs() } = props;
  const selectedMonth = dayjs(selectedDate)
    .format('MMMM')
    .toUpperCase();
  const threeMonths = [
    dayjs(today),
    dayjs(today).add(1, 'month'),
    dayjs(today).add(2, 'month')
  ];
  const monthsDisplay = threeMonths.map((month, idx) => {
    const monthName = month.format('MMMM').toUpperCase();
    const isSelected = monthName === selectedMonth;
    return (
      <Month
        key={`selMonth_${idx}`}
        onClick={() => selectedNewMonth(props, month)}
        selected={isSelected}
        expanded={isShowingCalendar}
      >
        {monthName}
      </Month>
    );
  });

  return (
    <ContainerView>
      <MonthSelection>{monthsDisplay}</MonthSelection>
      <Icon src={calendarIcon} alt='Calendar' />
    </ContainerView>
  );
}

function selectedNewMonth(props, month) {
  const { dSaveSelectedDate } = props;
  dSaveSelectedDate(month);
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
    dSaveSelectedDate: date => dispatch(saveSelectedDate(date)),
    dToggleShowingCalendar: status => dispatch(toggleShowingCalendar(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthBar);
