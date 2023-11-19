import React from 'react';
import { shallow } from 'enzyme';
import MonthContainer from './MonthContainer';

describe('MonthCalendar', () => {
  it('render correctly', () => {
    const wrapper = shallow(<MonthContainer>Sample content</MonthContainer>);
    expect(wrapper).toMatchSnapshot();
  });
});
