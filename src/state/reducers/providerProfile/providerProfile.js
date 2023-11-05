import {
  CLEAR_PROVIDER_PROFILE,
  SAVE_PROVIDER_PROFILE,
} from '../../../shared/constants';

const initialState = {
  Id: '',
  Name: '',
  Title: '',
  Description: '',
  Languages: [],
  Degrees: [],
  PictureURL: '',
};

export default function providerProfile(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case CLEAR_PROVIDER_PROFILE:
      return initialState;
    case SAVE_PROVIDER_PROFILE:
      return payload.providerProfile;
    default:
      return state;
  }
}
