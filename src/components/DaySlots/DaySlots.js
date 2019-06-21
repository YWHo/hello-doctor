import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import * as actions from '../../state/actions';
import * as selectors from '../../state/selectors';
import * as dateHelper from '../../shared/dateHelper';

const ContainerOuter = styled.div`
  display: block;
  height: 78px;
  padding: 12px 2px;
  overflow: hidden;
  white-space: nowrap;
`;

const ContainerInner = styled.div`
  display: block;
  height: 84px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 2px;
  white-space: nowrap;
`;

const ButtonCircle = styled.button`
  background-color: ${props => (props.selected ? '#177d91' : 'transparent')};
  border: none;
  border-radius: 50%;
  color: #fff;
  height: 66px;
  width: 66px;
  margin-right: 8px;

  :focus {
    outline: none;
  }

  :active {
    background-color: #1c98b0;
    outline: none;
  }
`;

const DateNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
`;

const WeekDayName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  font-size: 14px;
  font-weight: 300;
`;

export function DaySlots(props) {
  const { selectedDate = dayjs() } = props;

  const days = dateHelper.getDatesInThreeMonthsFrom();
  const dateList = days.map((day, idx) => {
    const tmpDate = dayjs(day);
    const selected = day === dayjs(selectedDate).format('YYYY-MM-DD');
    return (
      <ButtonCircle
        key={`dateCi_${idx}`}
        selected={selected}
        onClick={() => onDayClicked(props, day)}
      >
        <DateNum key={`dateNu_${idx}`}>{tmpDate.format('D')}</DateNum>
        <WeekDayName key={`weekDa_${idx}`}>
          {tmpDate.format('ddd').toLowerCase()}
        </WeekDayName>
      </ButtonCircle>
    );
  });

  return (
    <ContainerOuter>
      <ContainerInner>{dateList}</ContainerInner>
    </ContainerOuter>
  );
}

function onDayClicked(props, day) {
  const { dSaveSelectedDate } = props;
  dSaveSelectedDate(dayjs(day));
}

const mapStateToProps = state => {
  return {
    selectedDate: selectors.getSelectedDate(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dSaveSelectedDate: value => dispatch(actions.saveSelectedDate(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DaySlots);
