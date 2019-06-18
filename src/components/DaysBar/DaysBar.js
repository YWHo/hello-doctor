import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import * as dateHelper from '../../shared/dateHelper';

const Container = styled.div`
  display: block;
  height: 82px;
  padding: 8px 2px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const ButtonCircle = styled.button`
  background-color: ${props => (props.selected ? '#177d91' : 'transparent')};
  border: none;
  border-radius: 50%;
  color: #fff;
  height: 66px;
  width: 66px;

  :focus {
    outline: none;
  }

  :active {
    outline: none;
  }

  :hover {
    background-color: #20aac5;
  }
`;

const DateNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
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

export default function DaysBar(props) {
  const { selectedDate = moment() } = props;

  const days = dateHelper.getDatesInThreeMonthsFrom();
  console.log('days: ', days);
  console.log('selectedDate', moment(selectedDate).format('YYYY-MM-DD'));
  const dateList = days.map((day, idx) => {
    const tmpDate = moment(day);
    const selected = day === moment(selectedDate).format('YYYY-MM-DD');
    return (
      <ButtonCircle key={`dateCi_${idx}`} selected={selected}>
        <DateNum key={`dateNu_${idx}`}>{tmpDate.format('D')}</DateNum>
        <WeekDayName key={`weekDa_${idx}`}>
          {tmpDate.format('ddd').toLowerCase()}
        </WeekDayName>
      </ButtonCircle>
    );
  });

  return <Container>{dateList}</Container>;
}
