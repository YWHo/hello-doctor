import React from 'react';
import { shallow } from 'enzyme';
import RegisterPage from './RegisterPage';

describe('RegisterPage', () => {
  it('render correctly', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
