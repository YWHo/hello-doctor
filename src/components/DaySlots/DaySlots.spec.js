import React from 'react';
import dayjs from 'dayjs';
import { shallow } from 'enzyme';
import { DaySlots } from './DaySlots';

describe('DaySlots', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <DaySlots
        selectedDate={dayjs('2019-06-19')}
        today={dayjs('2019-06-16')}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
