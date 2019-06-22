import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TimeSlots from '../TimeSlots';
import { filterTimeSlotByPartOfDay } from '../../shared/dateHelper';
import { getSelectedDayPart } from '../../state/selectors';
import {
  DAY_AFTERNOON,
  DAY_EVENING,
  DAY_MORNING
} from '../../shared/constants';

const Container = styled.div`
  background-color: #fff;
  height: 166.95px;
  width: 100%;
  margin-bottom: 5px;
  padding-top: 15px;
  padding-left: 12px;
`;

const Photo = styled.img`
  float: left;
  height: 81px;
  width: 80px;
`;

const NameFrame = styled.div`
  color: #2a95bf;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  min-height: 29px;
  line-height: 29px;
  vertical-align: middle;
`;

const TitleFrame = styled.div`
  color: #818181;
  font-size: 14px;
  height: 19px;
  vertical-align: middle;
`;

const TextFrame = styled.div`
  margin-left: 103px;
  height: 81px;
`;

export function TimeCard(props) {
  const { meetSchedule, selectedDayPart = DAY_MORNING } = props;
  const {
    Name: name,
    Title: title,
    AvailableSlots: availableSlots = [],
    PictureURL: pictureURL = ''
  } = meetSchedule;
  const fullUrl = `https://frontendchallenge2019.azurewebsites.net/${pictureURL}`;
  const filteredSlots = filterTimeSlotByPartOfDay(
    availableSlots,
    selectedDayPart
  );

  return (
    <Container>
      <Photo src={fullUrl} alt="Doctor's photo" />
      <TextFrame>
        <NameFrame>{name}</NameFrame>
        <TitleFrame>{title}</TitleFrame>
      </TextFrame>
      <TimeSlots availableSlots={filteredSlots} />
    </Container>
  );
}

TimeCard.propTypes = {
  meetSchedule: PropTypes.object.isRequired,
  selectedDayPart: PropTypes.oneOf([DAY_MORNING, DAY_AFTERNOON, DAY_EVENING])
};

const mapStateToProps = state => {
  return {
    selectedDayPart: getSelectedDayPart(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeCard);
