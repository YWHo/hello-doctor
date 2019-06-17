import { CLEAR_SCHEDULES, SAVE_SCHEDULES } from '../../../shared/constants';

const initialState = [];

export default function schedules(state = initialState, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case CLEAR_SCHEDULES:
      return initialState;
    case SAVE_SCHEDULES:
      return payload.schedules;
    default:
      return state;
  }
}
