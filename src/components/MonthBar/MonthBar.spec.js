import React from 'react';
import MonthBar from './MonthBar';

import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('render correctly', () => {
    const component = renderer.create(<MonthBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
