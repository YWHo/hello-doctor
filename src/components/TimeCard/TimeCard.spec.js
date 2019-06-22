import React from 'react';
import { shallow } from 'enzyme';
import { TimeCard } from './TimeCard';
import {
  DAY_MORNING,
  DAY_AFTERNOON,
  DAY_EVENING
} from '../../shared/constants';

describe('RegisterPage', () => {
  const scheduleObj = {
    Id: '40abb954-2f57-4106-61ec-ddf2acfbf8ed',
    Title: 'General Practitioner',
    Name: 'Dr. Mary Aniston',
    AvailableSlots: {
      '9e7bbebf-92b7-4f1b-a6fc-35a72778cd77': '2019-06-16T08:00:00',
      '744022e0-54fb-41b5-b042-b4f8810d7e38': '2019-06-16T12:00:00',
      '87e5128b-d134-4d67-aca2-eef56a800adc': '2019-06-16T17:00:00'
    },
    PictureURL: '/api/Picture/40abb954-2f57-4106-61ec-ddf2acfbf8ed'
  };

  it('render default correctly', () => {
    const wrapper = shallow(<TimeCard meetSchedule={scheduleObj} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render to start from morning correctly', () => {
    const wrapper = shallow(
      <TimeCard meetSchedule={scheduleObj} selectedDayPart={DAY_MORNING} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('render to start from afternoon correctly', () => {
    const wrapper = shallow(
      <TimeCard meetSchedule={scheduleObj} selectedDayPart={DAY_AFTERNOON} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('render to start from evening correctly', () => {
    const wrapper = shallow(
      <TimeCard meetSchedule={scheduleObj} selectedDayPart={DAY_EVENING} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('render no time available correctly', () => {
    const emptyScheduleObj = {
      ...scheduleObj,
      AvailableSlots: {}
    };
    const wrapper = shallow(<TimeCard meetSchedule={emptyScheduleObj} />);
    expect(wrapper).toMatchSnapshot();
  });
});
