import React from 'react';
import dayjs from 'dayjs';
import { shallow } from 'enzyme';
import { MonthBar } from './MonthBar';
import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('render correctly', () => {
    const wrapper = shallow(<MonthBar selectedDate={dayjs('2019-06-19')} />);
    expect(wrapper).toMatchSnapshot();
  });
});
