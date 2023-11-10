import React from 'react';
import dayjs from 'dayjs';
import { shallow } from 'enzyme';
import { DaySlots } from './DaySlots';

describe('DaySlots', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <DaySlots
        selectedDate={dayjs('2019-06-19T00:37:25+0000')}
        today={dayjs('2019-06-16T10:17:13+0000')}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
