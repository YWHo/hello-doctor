import React from 'react';
import moment from 'moment';
import { MonthBar } from './MonthBar';
import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <MonthBar selectedDate={moment('20190619', 'YYYYMMDD')} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
