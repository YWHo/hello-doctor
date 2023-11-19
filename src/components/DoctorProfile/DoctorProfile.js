import React from 'react';
import styled from 'styled-components';
import ButtonXBig from '../ButtonXBig';
import doctor_male_1 from '../../assets/doctor_male_1.png';
import doctor_female_1 from '../../assets/doctor_female_1.png';
import doctor_female_2 from '../../assets/doctor_female_2.png';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

const Container = styled.div`
  background-color: #fff;
  display: ${(props) => (props.$show ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Photo = styled.img`
  background-color: #fff;
  display: block;
  height: 131px;
  width: 130px;
  margin: auto;
  margin-top: 31px;
  margin-bottom: 25.5px;
`;

const NameFrame = styled.div`
  color: #6c6c6c;
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  min-height: 28px;
  line-height: 28px;
  margin-bottom: 3px;
  text-align: center;
  vertical-align: middle;
`;

const TitleFrame = styled.div`
  color: #afafaf;
  font-size: 17px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: center;
  vertical-align: middle;
`;

const ButtonBookingBig = styled.button`
  border: 1px solid #30aec7;
  background-color: #fff;
  color: #2facc7;
  height: 45px;
  width: 327px;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  margin: auto;
`;

const ContainerButtonBookingBig = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const DescriptionBox = styled.div`
  color: #afafaf;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  line-height: 23px;
  margin: 0 15px 25px 15px;
  padding: 0 14px 21px 14px;
  border-bottom: 0.5px solid #d8d8d8;
`;

const LanguageHeading = styled.div`
  color: #585656;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  line-height: 23px;
  margin: 0 15px 23px 15px;
`;

const LanguagesFrame = styled.div`
  margin: 0 15px 23.5px 15px;
  padding: 0 14px 24.5px 14px;
  border-bottom: 0.5px solid #d8d8d8;
  word-wrap: normal;
`;

const LanguageBox = styled.span`
  color: #afafaf;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  line-height: 23px;
  height: 23px;
  margin-right: 29px;
`;

export function DoctorProfile() {
  const { toggleShowingProfile } = useActions();
  const providerProfile = useTypedSelector(
    (state) => state.providerProfileReducer,
  );
  const { showingProfile } = useTypedSelector((state) => state.uiShowReducer);
  const {
    Description: description,
    Languages: languages,
    Name: name,
    PictureURL: pictureURL,
    PictureName: pictureName,
    Title: title,
  } = providerProfile;
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
  const languageList = languages?.map((elem, idx) => (
    <LanguageBox key={`lang_${idx}`}>{elem}</LanguageBox>
  ));

  return (
    <Container $show={showingProfile}>
      <Photo src={fullUrl} alt="Doctor's profile photo" />
      <NameFrame>{name}</NameFrame>
      <TitleFrame>{title}</TitleFrame>
      <ContainerButtonBookingBig>
        <ButtonBookingBig>Book an Appointment</ButtonBookingBig>
      </ContainerButtonBookingBig>
      <DescriptionBox>{description}</DescriptionBox>
      <ButtonXBig onClick={() => toggleShowingProfile(false)} />
      <LanguageHeading>Languages Spoken</LanguageHeading>
      <LanguagesFrame>{languageList}</LanguagesFrame>
    </Container>
  );
}

export default DoctorProfile;
