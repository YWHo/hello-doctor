import { ACTION_TYPES } from '../../shared/constants';
import { fetchProvider } from '../../shared/apiRequester';

//////// Reducer ////////
const initialState = {
  Id: '',
  Name: '',
  Title: '',
  Description: '',
  Languages: [],
  Degrees: [],
  PictureURL: '',
};

export function providerProfileReducer(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case ACTION_TYPES.CLEAR_PROVIDER_PROFILE:
      return initialState;
    case ACTION_TYPES.SAVE_PROVIDER_PROFILE:
      return payload.providerProfile;
    default:
      return state;
  }
}

//////// Actions ////////

export function clearProviderProfile() {
  return {
    type: ACTION_TYPES.CLEAR_PROVIDER_PROFILE,
  };
}

export function saveProviderProfile(providerProfile) {
  return {
    type: ACTION_TYPES.SAVE_PROVIDER_PROFILE,
    payload: { providerProfile },
  };
}

//////// Async Actions ////////
export function toFetchProvider(id) {
  return (dispatch) => {
    return fetchProvider(id)
      .then((dict) => {
        dispatch(saveProviderProfile(dict));
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== 'test') {
          console.log('Failed to fetch provider: ', err);
        }
        dispatch(clearProviderProfile());
      });
  };
}

//////// Selector ////////
export function getProviderProfile({ providerProfileReducer }) {
  return providerProfileReducer;
}
