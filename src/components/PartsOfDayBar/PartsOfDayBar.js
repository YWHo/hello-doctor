import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  DAY_MORNING,
  DAY_AFTERNOON,
  DAY_EVENING,
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
  margin: 12px 4px;
`;

const Button = styled.button`
  height: 38px;
  background-color: inherit;
  color: #fff;
  border: ${(props) => (props.selected ? '1px solid #fff' : 'none')};
  border-radius: 50px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;

  :focus {
    outline: none;
  }

  :active {
    outline: none;
  }

  :disabled {
    color: #7bcadb;
    border-style: none;
  }
`;

export function PartsOfDayBar(props) {
  return (
    <Container>
      {showMorningButton(props)}
      {showAfternoonButton(props)}
      {showEveningButton(props)}
    </Container>
  );
}

function showMorningButton(props) {
  const { hasMorningTime, selectedDayPart = DAY_MORNING } = props;
  const selected = hasMorningTime && selectedDayPart === DAY_MORNING;

  return (
    <Button
      disabled={!hasMorningTime}
      selected={selected}
      onClick={() => {
        if (hasMorningTime) {
          onDayPartClicked(props, DAY_MORNING);
        }
      }}
    >
      Morning
    </Button>
  );
}

function showAfternoonButton(props) {
  const {
    hasAfternoonTime,
    hasMorningTime,
    selectedDayPart = DAY_MORNING,
  } = props;
  const selected =
    hasAfternoonTime && (!hasMorningTime || selectedDayPart === DAY_AFTERNOON);

  return (
    <Button
      disabled={!hasAfternoonTime}
      selected={selected}
      onClick={() => {
        if (hasAfternoonTime) {
          onDayPartClicked(props, DAY_AFTERNOON);
        }
      }}
    >
      Afternoon
    </Button>
  );
}

function showEveningButton(props) {
  const {
    hasAfternoonTime,
    hasMorningTime,
    hasEveningTime,
    selectedDayPart = DAY_MORNING,
  } = props;
  const selected =
    hasEveningTime &&
    ((!hasMorningTime && !hasAfternoonTime) || selectedDayPart === DAY_EVENING);

  return (
    <Button
      disabled={!hasEveningTime}
      selected={selected}
      onClick={() => {
        if (hasEveningTime) {
          onDayPartClicked(props, DAY_EVENING);
        }
      }}
    >
      Evening
    </Button>
  );
}

function onDayPartClicked(props, dayPart) {
  const { dSaveSelectedDayPart } = props;
  dSaveSelectedDayPart(dayPart);
}

PartsOfDayBar.propTypes = {
  hasMorningTime: PropTypes.bool,
  hasAfternoonTime: PropTypes.bool,
  hasEveningTime: PropTypes.bool,
  selectedDayPart: PropTypes.oneOf([DAY_MORNING, DAY_AFTERNOON, DAY_EVENING]),
};

const mapStateToProps = (state) => {
  return {
    hasAfternoonTime: selectors.getHasAfternoonTime(state),
    hasEveningTime: selectors.getHasEveningTime(state),
    hasMorningTime: selectors.getHasMorningTime(state),
    schedules: selectors.getSchedules(state),
    selectedDayPart: selectors.getSelectedDayPart(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dSaveSelectedDayPart: (value) =>
      dispatch(actions.saveSelectedDayPart(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsOfDayBar);
