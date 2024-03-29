import React from 'react';
import dayjs from 'dayjs';
import { shallow } from 'enzyme';
import { MonthBar } from './MonthBar';

describe('MonthBar', () => {
  it('render correctly', () => {
    const wrapper = shallow(<MonthBar selectedDate={dayjs('2019-06-19')} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render when showing calendar', () => {
    const wrapper = shallow(
      <MonthBar
        selectedDate={dayjs('2019-07-19')}
        isShowingCalendar={true}
        today={dayjs('2019-06-18')}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
