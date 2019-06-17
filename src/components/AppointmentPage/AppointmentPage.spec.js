import React from 'react';
import { AppointmentPage } from './AppointmentPage';
import { mockFetchSchedule } from '../../mocks/mockApi';
import renderer from 'react-test-renderer';

describe('AppointmentPage', () => {
  it('render correctly', () => {
    return mockFetchSchedule('2019-06-13').then(schedules => {
      const component = renderer.create(
        <AppointmentPage schedules={schedules} />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
