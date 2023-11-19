import type { AnyAction, Dispatch } from 'redux';
import { ACTION_TYPES } from '../../shared/constants';
import { fetchProvider } from '../../shared/apiRequester';
import { ProviderProfileState } from '../state-interface';

export function clearProviderProfile() {
  return {
    type: ACTION_TYPES.CLEAR_PROVIDER_PROFILE,
  };
}

export function saveProviderProfile(providerProfileObj: ProviderProfileState) {
  return {
    type: ACTION_TYPES.SAVE_PROVIDER_PROFILE,
    payload: { ...providerProfileObj },
  };
}

export function toFetchProvider(id: string) {
  return (dispatch: Dispatch<AnyAction>) => {
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
