import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleShowingProfile } from '../../state/actions';
import { getProviderProfile, getShowingProfile } from '../../state/selectors';

const Container = styled.div`
  background-color: #fff;
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ButtonX = styled.button`
  background-color: #3cb9c0;
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  position: fixed;
  z-index: 20;
  top: 48%;
  left: 48%;
  height: 72px;
  width: 72px;
  font-size: 45px;
  line-height: 72px;
  outline: none;

  @media (max-width: 650px) {
    left: 45%;
  }

  @media (max-width: 450px) {
    left: 43%;
  }

  @media (max-width: 345px) {
    left: 40%;
  }
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

export function DoctorProfile(props) {
  const { dToggleShowingProfile, providerProfile, showingProfile } = props;
  //console.log('providerProfile: ', providerProfile)
  const {
    Description: description,
    Languages: languages,
    Name: name,
    PictureURL: pictureURL,
    Title: title
  } = providerProfile;
  const fullUrl = pictureURL
    ? `https://frontendchallenge2019.azurewebsites.net/${pictureURL}`
    : '';
  const languageList = languages.map((elem, idx) => (
    <LanguageBox key={`lang_${idx}`}>{elem}</LanguageBox>
  ));

  return (
    <Container show={showingProfile}>
      <Photo src={fullUrl} alt="Doctor's profile photo" />
      <NameFrame>{name}</NameFrame>
      <TitleFrame>{title}</TitleFrame>
      <ContainerButtonBookingBig>
        <ButtonBookingBig>Book an Appointment</ButtonBookingBig>
      </ContainerButtonBookingBig>
      <DescriptionBox>{description}</DescriptionBox>
      <ButtonX onClick={() => dToggleShowingProfile(false)}>&#10005;</ButtonX>
      <LanguageHeading>Languages Spoken</LanguageHeading>
      <LanguagesFrame>{languageList}</LanguagesFrame>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    showingProfile: getShowingProfile(state),
    providerProfile: getProviderProfile(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dToggleShowingProfile: status => dispatch(toggleShowingProfile(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorProfile);
