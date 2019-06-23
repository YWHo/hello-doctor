import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { getSelectedDate, getShowingCalendar } from '../../state/selectors';
import { getWeekdayLabels, getMonthArray2dOf } from '../../shared/dateHelper';

const Container = styled.div`
  display: block;
  background-color: #177d91;
  margin-top: ${props => (props.show ? '20px' : 0)};
  padding-bottom: ${props => (props.show ? '16px' : 0)};
  height: 100%;
  max-height: ${props => (props.show ? '294px' : 0)};
  transition: max-height 1s, margin-top 1s, padding-bottom 1s;
  transition-delay: ${props => (props.show ? 0 : '1s')};
`;

const TableView = styled.table`
  margin: auto;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: visibility 1.5s, opacity 1.5s;
  transition-delay: ${props => (props.show ? '0.5s' : 0)};
`;

const TableData = styled.td`
  height: 40px;
  width: 48px;
`;

const DateLabel = styled.div`
  background-color: ${props =>
    props.selected ? '#0E6171' : props.isAdjacent ? '#147487' : 'transparent'};
  border-radius: ${props =>
    props.selected || props.isAdjacent ? '50%' : '100%'};
  font-family: 'Roboto', sans-serif;
  font-weight: ${props => (props.selected ? 500 : 300)};
  font-size: 20px;
  color: ${props =>
    props.isHeader || props.selected
      ? '#fff'
      : props.enabled
      ? '#ddecee'
      : '#8bbcc6'};
  line-height: 38px;
  height: 38px;
  width: 38px;
  text-align: center;
  vertical-align: middle;
`;

export function MonthCalendar(props) {
  const { isShowingCalendar = false } = props;

  return (
    <Container show={isShowingCalendar}>
      <TableView show={isShowingCalendar}>
        <tbody>
          {showWeekLabels()}
          {showCalendarRows(props)}
        </tbody>
      </TableView>
    </Container>
  );
}

function showWeekLabels() {
  const weekLabels = getWeekdayLabels().map((name, idx) => {
    return (
      <TableData key={`td0_${idx}`}>
        <DateLabel isHeader>{name}</DateLabel>
      </TableData>
    );
  });
  return <tr>{weekLabels}</tr>;
}

function showCalendarRows(props) {
  const { selectedDate } = props;
  const selectedValue = dayjs(selectedDate).format('D');
  const adjacent = getAdjacentDict(selectedValue);

  return getMonthArray2dOf(selectedDate).map((row, idxA) => {
    const singleRow = row.map((val, idxB) => {
      const enabled = Number(val) >= Number(selectedValue);
      return (
        <TableData key={`tc_${idxA}_${idxB}`}>
          <DateLabel
            selected={selectedValue === val}
            isAdjacent={adjacent[val]}
            enabled={enabled}
          >
            {val}
          </DateLabel>
        </TableData>
      );
    });

    return <tr key={`tr_${idxA}`}>{singleRow}</tr>;
  });
}

function getAdjacentDict(refValue) {
  const value = Number(refValue);
  const adjacent = {};
  [-2, -1, 1, 2].forEach(val => (adjacent[`${value + val}`] = true));

  return adjacent;
}

MonthCalendar.propTypes = {
  selectedDate: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isShowingCalendar: getShowingCalendar(state),
    selectedDate: getSelectedDate(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthCalendar);
