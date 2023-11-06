import axios from 'axios';
import dayjs from 'dayjs';

export function fetchSchedule(date) {
  const formatedDate = dayjs(date).format('YYYY-MM-DD');
  const fullUrl = `https://frontendchallenge2019.azurewebsites.net/api/Schedule/${formatedDate}`;
  return remoteGet(fullUrl);
}

export function fetchProvider(id) {
  const fullUrl = `https://frontendchallenge2019.azurewebsites.net/api/Provider/${id}`;
  return remoteGet(fullUrl);
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
