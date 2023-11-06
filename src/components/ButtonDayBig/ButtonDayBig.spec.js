import React from 'react';
import dayjs from 'dayjs';
import { shallow } from 'enzyme';
import { ButtonDayBig } from './ButtonDayBig';

describe('ButtonDayBig', () => {
  const selectedDate = dayjs('2019-06-17');
  const today = dayjs('2019-06-16');
  it('render on before today', () => {
    const wrapper = shallow(
      <ButtonDayBig
        dateStr='2019-06-15'
        selectedDate={selectedDate}
        today={today}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('render on today', () => {
    const wrapper = shallow(
      <ButtonDayBig
        dateStr='2019-06-16'
        selectedDate={selectedDate}
        today={today}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('render on after today', () => {
    const wrapper = shallow(
      <ButtonDayBig
        dateStr='2019-06-17'
        selectedDate={selectedDate}
        today={today}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
