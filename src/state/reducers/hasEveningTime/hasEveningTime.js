import {
  CLEAR_HAS_EVENING_TIME,
  SAVE_HAS_EVENING_TIME
} from '../../../shared/constants';

const initialState = false;

export default function hasEveningTime(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case CLEAR_HAS_EVENING_TIME:
      return initialState;
    case SAVE_HAS_EVENING_TIME:
      return payload.hasEveningTime;
    default:
      return state;
  }
}
