import React from 'react';
import { shallow } from 'enzyme';
import { TimeSlots } from './TimeSlots';

describe('DaySlots', () => {
  it('render "No Appointment Available"', () => {
    const wrapper = shallow(<TimeSlots />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render based on the given schedule', () => {
    const schedules = {
      '546ad6da-1fe7-4081-a820-3c9e838aa453': '2019-06-16T09:45:00',
      '3ea1c27a-b0e5-4e25-af5e-8e0f9ad159a2': '2019-06-16T10:00:00',
      '426c2477-5cda-44a1-9354-14c33c5e90a7': '2019-06-16T10:15:00'
    };
    const wrapper = shallow(<TimeSlots availableSlots={schedules} />);
    expect(wrapper).toMatchSnapshot();
  });
});
