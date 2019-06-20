import React from 'react';
import dayjs from 'dayjs';
import { DaySlots } from './DaySlots';
import renderer from 'react-test-renderer';

describe('DaySlots', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <DaySlots selectedDate={dayjs('2019-06-19')} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
