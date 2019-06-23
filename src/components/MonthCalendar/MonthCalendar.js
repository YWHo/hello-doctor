import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { getSelectedDate } from '../../state/selectors';
import { getWeekdayLabels } from '../../shared/dateHelper';

const Container = styled.div`
  background-color: #177d91;
  margin-top: 39px;
  height: 218px;
`;

const TableView = styled.table`
  margin: auto;
`;

const TableData = styled.td`
  height: 52px;
  width: 52px;
`;

const DateLabel = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #fff;
  line-height: 38px;
  height: 38px;
  width: 38px;
  text-align: center;
  vertical-align: middle;
`;

export function MonthCalendar(props) {
  const weekLabels = getWeekdayLabels().map((name, idx) => {
    return (
      <TableData key={`td0_${idx}`}>
        <DateLabel>{name}</DateLabel>
      </TableData>
    );
  });

  return (
    <Container>
      <TableView>
        <tbody>
          <tr>{weekLabels}</tr>
        </tbody>
      </TableView>
    </Container>
  );
}

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
)(MonthCalendar);
