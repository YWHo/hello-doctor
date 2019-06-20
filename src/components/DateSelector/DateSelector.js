import React from 'react';
import styled from 'styled-components';
import DaysBar from '../DaysBar';
import PartsOfDayBar from '../PartsOfDayBar';

const Container = styled.div`
  background-color: #3cb9c0;
  background-image: linear-gradient(to right, #3cb9c0, #2caaca);
  height: 148px;
  margin-bottom: 8px;
  box-shadow: 1px 5px 8px #cccccc;
`;

export default function DateSelector(props) {
  return (
    <Container>
      <DaysBar />
      <PartsOfDayBar />
    </Container>
  );
}
