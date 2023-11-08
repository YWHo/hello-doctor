import axios from 'axios';
import dayjs from 'dayjs';
import { mockFetchProvider, mockFetchSchedule } from '../mocks/mockApi';

export function fetchSchedule(date) {
  if (process.env.NODE_ENV === 'test') {
    // temporary disabled on live and used by testing
    const formatedDate = dayjs(date).format('YYYY-MM-DD');
    const fullUrl = `https://frontendchallenge2019.azurewebsites.net/api/Schedule/${formatedDate}`;
    return remoteGet(fullUrl);
  }
  return mockFetchSchedule(dayjs(date).format('YYYY-MM-DD')); // temporary until has a valid backend
}

export function fetchProvider(id) {
  if (process.env.NODE_ENV === 'test') {
    // temporary disabled on live and used by testing
    const fullUrl = `https://frontendchallenge2019.azurewebsites.net/api/Provider/${id}`;
    return remoteGet(fullUrl);
  }
  return mockFetchProvider(id); // temporary until has a valid backend
}

export function fetchPicture(id) {
  const fullUrl = `https://frontendchallenge2019.azurewebsites.net/api/Picture/${id}`;
  return remoteGet(fullUrl);
}

function remoteGet(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(JSON.parse(res.data));
      })
      .catch((err) => reject(err));
  });
}
