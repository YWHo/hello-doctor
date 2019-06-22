import React from 'react';
import { shallow } from 'enzyme';
import { PartsOfDayBar } from './PartsOfDayBar';
import { DAY_AFTERNOON } from '../../shared/constants';

describe('DaySlots', () => {
  it('render correctly', () => {
    const wrapper = shallow(<PartsOfDayBar selectedDayPart={DAY_AFTERNOON} />);
    expect(wrapper).toMatchSnapshot();
  });
});
