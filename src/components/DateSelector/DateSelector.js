import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DaySlots from '../DaySlots';
import PartsOfDayBar from '../PartsOfDayBar';
import { getShowingCalendar } from '../../state/selectors';

const Container = styled.div`
  background-color: #3cb9c0;
  background-image: linear-gradient(to right, #3cb9c0, #2caaca);
  height: ${(props) => (props.show ? '148px' : 0)};
  margin-bottom: 8px;
  box-shadow: 1px 5px 8px #cccccc;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition-delay: ${(props) => (props.show ? '1s' : 0)};
`;

export function DateSelector(props) {
  const { isShowingCalendar = false } = props;

  return (
    <Container show={!isShowingCalendar}>
      <DaySlots />
      <PartsOfDayBar />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    isShowingCalendar: getShowingCalendar(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
