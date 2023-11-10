import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import ButtonDayBig from '../ButtonDayBig';
import { getSelectedDate } from '../../state/pendingAppointment';
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

export function DaySlots(props) {
  const { today = dayjs() } = props;
  const todayStr = today.format('YYYY-MM-DD');
  const last2Days = dateHelper.getDatesOfPreviousTwoDaysFrom(todayStr);
  const daysIn3Months = dateHelper.getDatesInThreeMonthsFrom(todayStr);
  const days = last2Days.concat(daysIn3Months);
  const dateList = days.map((dateStr, idx) => {
    return <ButtonDayBig key={`btnB_${idx}`} dateStr={dateStr} today={today} />;
  });

  return (
    <ContainerOuter>
      <ContainerInner>{dateList}</ContainerInner>
    </ContainerOuter>
  );
}

DaySlots.propTypes = {
  today: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    selectedDate: getSelectedDate(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySlots);
