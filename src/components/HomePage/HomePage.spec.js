import React from 'react'
import HomePage from './HomePage'
import { mockFetchSchedule } from '../../mocks/mockApi'
import renderer from 'react-test-renderer';

describe('HomePage', () => {
  it('render correctly', () => {
    return mockFetchSchedule('2019-06-13')
    .then(schedules => {
      const component = renderer.create(
        <HomePage schedules={schedules}/>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
})