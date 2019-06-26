import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #177d91;
`;

export default function MonthContainer(props) {
  const { children } = props;
  return <Container>{children}</Container>;
}
