import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  DAY_MORNING,
  DAY_AFTERNOON,
  DAY_EVENING
} from '../../shared/constants';
import * as selectors from '../../state/selectors';
import * as actions from '../../state/actions';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  padding: 0 8px;
  margin-top: 12px;
`;

const Button = styled.button`
  height: 38px;
  background-color: transparent;
  color: #fff;
  border-color: ${props => (props.selected ? '#fff' : 'transparent')};
  border-radius: 50px;
  font-size: 18px;
  font-weight: 300;

  :focus {
    outline: none;
  }

  :active {
    outline: none;
  }
`;

export function PartsOfDayBar(props) {
  const { schedules = [], selectedDayPart = DAY_MORNING } = props;

  console.log('schedules: ', schedules);

  return (
    <Container>
      <Button
        selected={selectedDayPart === DAY_MORNING}
        onClick={() => {
          onDayPartClicked(props, DAY_MORNING);
        }}
      >
        Morning
      </Button>
      <Button
        selected={selectedDayPart === DAY_AFTERNOON}
        onClick={() => {
          onDayPartClicked(props, DAY_AFTERNOON);
        }}
      >
        Afternoon
      </Button>
      <Button
        selected={selectedDayPart === DAY_EVENING}
        onClick={() => {
          onDayPartClicked(props, DAY_EVENING);
        }}
      >
        Evening
      </Button>
    </Container>
  );
}

function onDayPartClicked(props, dayPart) {
  const { dSaveSelectedDayPart } = props;
  dSaveSelectedDayPart(dayPart);
}

const mapStateToProps = state => {
  return {
    schedules: selectors.getSchedules(state),
    selectedDayPart: selectors.getSelectedDayPart(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dSaveSelectedDayPart: value => dispatch(actions.saveSelectedDayPart(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartsOfDayBar);
