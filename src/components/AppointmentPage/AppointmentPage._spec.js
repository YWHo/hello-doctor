import React from 'react';
import { shallow } from 'enzyme';
import { AppointmentPage } from './AppointmentPage';
import { mockFetchSchedule } from '../../mocks/mockApi';

describe('AppointmentPage', () => {
  it('render correctly', () => {
    return mockFetchSchedule('2019-06-16').then((schedules) => {
      const wrapper = shallow(<AppointmentPage schedules={schedules} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
