import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import TimeSlots from '../TimeSlots';
import {
  filterTimeSlotByPartOfDay,
  filterTimePassedNow,
} from '../../shared/dateHelper';
import doctor_male_1 from '../../assets/doctor_male_1.png';
import doctor_female_1 from '../../assets/doctor_female_1.png';
import doctor_female_2 from '../../assets/doctor_female_2.png';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { DAY } from '../../shared/constants';

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
  cursor: pointer;
`;

const NameFrame = styled.span`
  color: #2a95bf;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  min-height: 29px;
  line-height: 29px;
  vertical-align: middle;
`;

const TitleFrame = styled.span`
  color: #818181;
  cursor: pointer;
  font-size: 14px;
  height: 19px;
  vertical-align: middle;
`;

const TextFrame = styled.div`
  margin-left: 103px;
  height: 81px;
`;

export function TimeCard(props) {
  const { meetSchedule, today = dayjs() } = props;
  const { toFetchProvider, toFetchSchedules, toggleShowingProfile } =
    useActions();
  const { selectedDayPart = DAY.MORNING } = useTypedSelector(
    (state) => state.pendingAppointmentReducer,
  );
  const allProps = {
    ...props,
    toFetchProvider,
    toFetchSchedules,
    toggleShowingProfile,
  };
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
        onClick={() => onOpeningProfile(allProps, doctorId)}
      />
      <TextFrame>
        <div>
          <NameFrame onClick={() => onOpeningProfile(allProps, doctorId)}>
            {name}
          </NameFrame>
        </div>
        <div>
          <TitleFrame onClick={() => onOpeningProfile(allProps, doctorId)}>
            {title}
          </TitleFrame>
        </div>
      </TextFrame>
      <TimeSlots availableSlots={filteredSlots} />
    </Container>
  );
}

function onOpeningProfile(props, doctorID) {
  const { toFetchProvider, toggleShowingProfile } = props;
  toFetchProvider(doctorID);
  toggleShowingProfile(true);
}

TimeCard.propTypes = {
  meetSchedule: PropTypes.object.isRequired,
  today: PropTypes.object,
};

export default TimeCard;
