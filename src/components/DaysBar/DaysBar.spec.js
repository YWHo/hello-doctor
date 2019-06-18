import React from 'react';
import moment from 'moment';
import { DaysBar } from './DaysBar';
import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <DaysBar selectedDate={moment('20190619', 'YYYYMMDD')} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
