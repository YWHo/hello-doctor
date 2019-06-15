import React from 'react'
import RegisterPage from './RegisterPage'
import { mockFetchSchedule } from '../../mocks/mockApi'
import renderer from 'react-test-renderer';

describe('RegisterPage', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <RegisterPage />,
    );
    expect(component.toJSON()).toMatchSnapshot();
    return mockFetchSchedule('2019-06-13')
  });
})