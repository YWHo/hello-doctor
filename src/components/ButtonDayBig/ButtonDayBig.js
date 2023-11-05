import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import assert from 'assert';
import PropTypes from 'prop-types';
import * as actions from '../../state/actions';
import * as selectors from '../../state/selectors';

const ButtonCircle = styled.button`
  background-color: ${(props) => (props.selected ? '#177d91' : 'transparent')};
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

  :disabled {
    background: transparent;
    color: #7bcadb;
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

export function ButtonDayBig(props) {
  const { dateStr, selectedDate = dayjs(), today = dayjs() } = props;
  assert(
    /^\d{4}-\d{2}-\d{2}$/.test(dateStr),
    'must be in the format of YYYY-MM-DD',
  );
  const nameRef = useRef(dateStr);
  const todayStr = dayjs(today).format('YYYY-MM-DD');
  const tmpDate = dayjs(dateStr);
  const selected = dateStr === dayjs(selectedDate).format('YYYY-MM-DD');
  const disabled = dayjs(dateStr).isBefore(dayjs(todayStr));

  useEffect(() => {
    if (selected) {
      nameRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selected, selectedDate]);
  return (
    <ButtonCircle
      ref={nameRef}
      disabled={disabled}
      selected={selected}
      onClick={() => onDayClicked(props, dateStr)}
    >
      <DateNum>{tmpDate.format('D')}</DateNum>
      <WeekDayName>{tmpDate.format('ddd').toLowerCase()}</WeekDayName>
    </ButtonCircle>
  );
}

function onDayClicked(props, dateStr) {
  const { dSaveSelectedDate } = props;
  dSaveSelectedDate(dayjs(dateStr));
}

ButtonDayBig.propTypes = {
  selectedDate: PropTypes.object,
  today: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    selectedDate: selectors.getSelectedDate(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dSaveSelectedDate: (value) => dispatch(actions.saveSelectedDate(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDayBig);
