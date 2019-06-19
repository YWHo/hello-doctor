import * as mockData from './mockData';

export function mockFetchSchedule(date) {
  const data = mockData.scheduleDict;

  if (data[date]) {
    return Promise.resolve(data[date]);
  } else {
    return Promise.resolve([]);
  }
}

export function mockFetchProvider(id) {
  const data = mockData.providers;

  if (data[id]) {
    return Promise.resolve(data[id]);
  } else {
    return Promise.resolve({});
  }
}
