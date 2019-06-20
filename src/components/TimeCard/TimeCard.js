import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TimeSlots from '../TimeSlots';

const Container = styled.div`
  background-color: #fff;
  height: 166.95px;
  width: 100%;
  margin-bottom: 5px;
  padding-top: 15px;
  padding-left: 12px;
`;

const PhotoFrame = styled.div`
  background-color: red;
  float: left;
  height: 81px;
  width: 80px;
`;

const NameFrame = styled.div`
  background-color: orange;
  color: #2a95bf;
  font-size: 22px;
  height: 29px;
  line-height: 29px;
  vertical-align: middle;
`;

const TitleFrame = styled.div`
  background-color: blue;
  color: #818181;
  font-size: 14px;
  height: 19px;
  vertical-align: middle;
`;

const TextFrame = styled.div`
  background-color: yellow;
  margin-left: 103px;
  height: 81px;
  width: 150px;
`;

export function TimeCard(props) {
  return (
    <Container>
      <PhotoFrame></PhotoFrame>
      <TextFrame>
        <NameFrame></NameFrame>
        <TitleFrame></TitleFrame>
      </TextFrame>
      <TimeSlots></TimeSlots>
    </Container>
  );
}

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeCard);
