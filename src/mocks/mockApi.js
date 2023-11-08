import * as mockData from './mockData';
import * as mockData2 from './mockData2';

export function mockFetchSchedule(date) {
  const scheduleDict2 = mockData2.getScheduleDict2(date);
  let data;

  if (process.env.NODE_ENV === 'test') {
    data = mockData.scheduleDict;
  } else {
    data = scheduleDict2;
  }

  if (data[date]) {
    return Promise.resolve(data[date]);
  } else {
    return Promise.resolve([]);
  }
}

export function mockFetchProvider(id) {
  const { providers } = mockData;
  const { providers2 } = mockData2;
  const data = { ...providers, ...providers2 };
  console.log('provider data:\n', data);

  if (data[id]) {
    return Promise.resolve(data[id]);
  } else {
    return Promise.resolve({});
  }
}
