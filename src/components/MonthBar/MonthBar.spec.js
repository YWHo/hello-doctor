import React from 'react';
import dayjs from 'dayjs';
import { MonthBar } from './MonthBar';
import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <MonthBar selectedDate={dayjs('2019-06-19')} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
