import axios from 'axios';

export function fetchSchedule(date) {
  const fullUrl = `https://frontendchallenge2019.azurewebsites.net/api/Schedule/${date}`;
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
      .then(res => {
        resolve(JSON.parse(res.data));
      })
      .catch(err => reject(err));
  });
}
