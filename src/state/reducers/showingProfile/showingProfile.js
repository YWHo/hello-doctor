import { TOGGLE_SHOWING_PROFILE } from '../../../shared/constants';

const initialState = false;

export default function showingProfile(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case TOGGLE_SHOWING_PROFILE:
      return payload.showingProfile;
    default:
      return state;
  }
}
