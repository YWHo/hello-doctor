import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { getSelectedDate, getShowingCalendar } from '../../state/selectors';
import { getWeekdayLabels, getMonthArray2dOf } from '../../shared/dateHelper';

const Container = styled.div`
  background-color: #177d91;
  margin-top: 20px;
  padding-bottom: 16px;
`;

const TableView = styled.table`
  margin: auto;
`;

const TableData = styled.td`
  height: 40px;
  width: 48px;
`;

const DateLabel = styled.div`
  background-color: ${props =>
    props.selected ? '#0E6171' : props.isAdjacent ? '#147487' : '#177d91'};
  border-radius: ${props =>
    props.selected || props.isAdjacent ? '50%' : '100%'};
  font-family: 'Roboto', sans-serif;
  font-weight: ${props => (props.selected ? 500 : 300)};
  font-size: 20px;
  color: ${props => (props.isHeader || props.selected ? '#fff' : '#8bbcc6')};
  line-height: 38px;
  height: 38px;
  width: 38px;
  text-align: center;
  vertical-align: middle;
`;

export function MonthCalendar(props) {
  const { isShowingCalendar = false } = props;

  if (!isShowingCalendar) return null;

  return (
    <Container>
      <TableView>
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
      return (
        <TableData key={`tc_${idxA}_${idxB}`}>
          <DateLabel
            selected={selectedValue === val}
            isAdjacent={adjacent[val]}
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
