import React from 'react';
import styled from 'styled-components';
import DaysBar from '../DaysBar';

const Container = styled.div`
  background-color: #3cb9c0;
  background-image: linear-gradient(to right, #3cb9c0, #2caaca);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  height: 118.5px;
  padding: 0 0.4rem;
`;

export default function DateSelector(props) {
  return (
    <Container>
      <DaysBar />
    </Container>
  );
}
