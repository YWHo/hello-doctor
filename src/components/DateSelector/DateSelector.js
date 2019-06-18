import React from 'react';
import styled from 'styled-components';
import DaysBar from '../DaysBar';

const Container = styled.div`
  background-color: #3cb9c0;
  background-image: linear-gradient(to right, #3cb9c0, #2caaca);
  height: 118.5px;
`;

export default function DateSelector(props) {
  return (
    <Container>
      <DaysBar />
    </Container>
  );
}
