import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import calendarIcon from '../../assets/calendar_icon.svg';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

const Container = styled.div`
  background-color: #177d91;
  padding: 0.2rem 16px;
`;

const ContainerView = styled.div`
  display: flex;
  cursor: ${(props) => (props.$expanded ? 'default' : 'pointer')};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 39px;
`;

const MonthSelection = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 39px;
`;

const Month = styled.div`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border-bottom: ${(props) =>
    props.selected ? '3px solid #33CCCC' : '3px solid #177d91'};
  margin-right: 24px;
  padding-bottom: ${(props) => (props.$expanded ? '5.5px' : 0)};
`;

const Icon = styled.img`
  margin-bottom: 0.1rem;
`;

export function MonthBar(props) {
  const { saveSelectedDate, toggleShowingCalendar } = useActions();
  const { selectedDate } = useTypedSelector(
    (state) => state.pendingAppointmentReducer,
  );
  const { showingCalendar } = useTypedSelector((state) => state.uiShowReducer);
  const allProps = {
    ...props,
    saveSelectedDate,
    selectedDate,
    showingCalendar,
    toggleShowingCalendar,
  };
  const view = showingCalendar
    ? showExpandView(allProps)
    : showCollapseView(allProps);

  return <Container>{view}</Container>;
}

function showCollapseView(props) {
  const { selectedDate = dayjs() } = props;
  const selectedMonth = dayjs(selectedDate).format('MMMM').toUpperCase();

  return (
    <ContainerView $expanded={false} onClick={() => onMonthBarClicked(props)}>
      <Month $expanded={false}>{selectedMonth}</Month>
      <Icon src={calendarIcon} alt='Calendar' />
    </ContainerView>
  );
}

function showExpandView(props) {
  const { selectedDate = dayjs(), today = dayjs() } = props;
  const selectedMonth = dayjs(selectedDate).format('MMMM').toUpperCase();
  const threeMonths = [
    dayjs(today),
    dayjs(today).add(1, 'month'),
    dayjs(today).add(2, 'month'),
  ];
  const monthsDisplay = threeMonths.map((month, idx) => {
    const monthName = month.format('MMMM').toUpperCase();
    const isSelected = monthName === selectedMonth;
    return (
      <Month
        key={`selMonth_${idx}`}
        onClick={() => selectedNewMonth(props, month)}
        selected={isSelected}
        $expanded={true}
      >
        {monthName}
      </Month>
    );
  });

  return (
    <ContainerView $expanded={true}>
      <MonthSelection>{monthsDisplay}</MonthSelection>
      <Icon src={calendarIcon} alt='Calendar' />
    </ContainerView>
  );
}

function selectedNewMonth(props, month) {
  const { saveSelectedDate } = props;
  saveSelectedDate(month);
}

function onMonthBarClicked(props) {
  const { toggleShowingCalendar, showingCalendar } = props;
  toggleShowingCalendar(!showingCalendar);
}

MonthBar.propTypes = {
  today: PropTypes.object,
};

export default MonthBar;
