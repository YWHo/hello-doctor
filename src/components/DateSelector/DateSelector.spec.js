import React from 'react';
import { shallow } from 'enzyme';
import DateSelector from './DateSelector';

describe('DateSelector', () => {
  it('render default correctly, ', () => {
    const wrapper = shallow(<DateSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
