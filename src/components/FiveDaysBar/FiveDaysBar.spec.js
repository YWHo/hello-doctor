import React from 'react';
import moment from 'moment';
import FiveDaysBar from './FiveDaysBar';
import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <FiveDaysBar selectedDate={moment('20190619', 'YYYYMMDD')} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
