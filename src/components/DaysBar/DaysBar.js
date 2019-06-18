import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const DateCircle = styled.div`
  background-color: ${props => (props.selected ? '#177d91' : 'transparent')};
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  height: 66px;
  width: 66px;
`;

const DateCombined = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 42px;
  width: 28px;
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

  const dateDiff = [-2, -1, 0, 1, 2];
  const dateList = dateDiff.map((num, idx) => {
    const tmpDate = moment(selectedDate).add(num, 'days');
    const selected = num === 0;
    return (
      <DateCircle key={`dateCi_${idx}`} selected={selected}>
        <DateCombined key={`dateCo_${idx}`}>
          <DateNum key={`dateNu_${idx}`}>{tmpDate.format('DD')}</DateNum>
          <WeekDayName key={`weekDa_${idx}`}>
            {tmpDate.format('ddd').toLowerCase()}
          </WeekDayName>
        </DateCombined>
      </DateCircle>
    );
  });

  return <React.Fragment>{dateList}</React.Fragment>;
}
