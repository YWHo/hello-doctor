import React from 'react';
import dayjs from 'dayjs';
import { shallow } from 'enzyme';
import { MonthCalendar } from './MonthCalendar';

describe('MonthCalendar', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <MonthCalendar
        selectedDate={dayjs('2019-06-27')}
        today={dayjs('2019-06-23')}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
