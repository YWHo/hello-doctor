import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import TimeSlots from '../TimeSlots';
import {
  filterTimeSlotByPartOfDay,
  filterTimePassedNow,
} from '../../shared/dateHelper';
import { toFetchProvider } from '../../state/providerProfile';
import { toggleShowingProfile } from '../../state/uiShow';
import { getSelectedDayPart } from '../../state/pendingAppointment';
import { DAY } from '../../shared/constants';
import doctor_male_1 from '../../assets/doctor_male_1.png';
import doctor_female_1 from '../../assets/doctor_female_1.png';
import doctor_female_2 from '../../assets/doctor_female_2.png';

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
  const {
    meetSchedule,
    selectedDayPart = DAY.MORNING,
    today = dayjs(),
  } = props;
  const {
    Id: doctorId,
    Name: name,
    Title: title,
    AvailableSlots: availableSlots = [],
    PictureURL: pictureURL = '',
    PictureName: pictureName = '',
  } = meetSchedule;

  const pictureLink = pictureURL
    ? `https://frontendchallenge2019.azurewebsites.net/${pictureURL}`
    : '';
  const getAssetPicture = (name) => {
    switch (name) {
      case 'doctor_male_1':
        return doctor_male_1;
      case 'doctor_female_1':
        return doctor_female_1;
      case 'doctor_female_2':
        return doctor_female_2;
      default:
        return '';
    }
  };
  const fullUrl = pictureName ? getAssetPicture(pictureName) : pictureLink;
  const filteredSlotsByPart = filterTimeSlotByPartOfDay(
    availableSlots,
    selectedDayPart,
  );
  const filteredSlots = filterTimePassedNow(filteredSlotsByPart, today);

  return (
    <Container>
      <Photo
        src={fullUrl}
        alt="Doctor's photo"
        onClick={() => onOpeningProfile(props, doctorId)}
      />
      <TextFrame>
        <NameFrame onClick={() => onOpeningProfile(props, doctorId)}>
          {name}
        </NameFrame>
        <TitleFrame onClick={() => onOpeningProfile(props, doctorId)}>
          {title}
        </TitleFrame>
      </TextFrame>
      <TimeSlots availableSlots={filteredSlots} />
    </Container>
  );
}

function onOpeningProfile(props, doctorID) {
  const { dToFetchProvider, dToggleShowingProfile } = props;
  dToFetchProvider(doctorID);
  dToggleShowingProfile(true);
}

TimeCard.propTypes = {
  meetSchedule: PropTypes.object.isRequired,
  selectedDayPart: PropTypes.oneOf([DAY.MORNING, DAY.AFTERNOON, DAY.EVENING]),
  today: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    selectedDayPart: getSelectedDayPart(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dToFetchProvider: (id) => dispatch(toFetchProvider(id)),
    dToggleShowingProfile: (status) => dispatch(toggleShowingProfile(status)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeCard);
