import React from 'react';
import { shallow } from 'enzyme';
import { PartsOfDayBar } from './PartsOfDayBar';
import { DAY } from '../../shared/constants';

describe('PartsOfDayBar', () => {
  it('render correctly', () => {
    const wrapper = shallow(<PartsOfDayBar selectedDayPart={DAY.AFTERNOON} />);
    expect(wrapper).toMatchSnapshot();
  });
});
