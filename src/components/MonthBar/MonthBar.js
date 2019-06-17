import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import calendarIcon from '../../assets/calendar_icon.svg';

const Container = styled.div`
  background-color: #177d91;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 39px;
  padding: 0.4rem;
`;

const Month = styled.div`
  color: #fff;
  font-size: 16px;
`;

const Icon = styled.img`
  margin-bottom: 0.1rem;
`;

export default function MonthBar(props) {
  const {
    selectedMonth = moment()
      .format('MMMM')
      .toUpperCase()
  } = props;

  return (
    <Container>
      <Month>{selectedMonth}</Month>
      <Icon src={calendarIcon} alt='Calendar' />
    </Container>
  );
}
