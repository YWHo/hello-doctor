import React from 'react';
import dayjs from 'dayjs';
import { DaysBar } from './DaysBar';
import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <DaysBar selectedDate={dayjs('2019-06-19')} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
