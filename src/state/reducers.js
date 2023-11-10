import { combineReducers } from 'redux';
import { pendingAppointmentReducer } from './pendingAppointment';
import { providerProfileReducer } from './providerProfile';
import { timeSlotsReducer } from './timeSlots';
import { uiShowReducer } from './uiShow';

export default combineReducers({
  pendingAppointmentReducer,
  providerProfileReducer,
  timeSlotsReducer,
  uiShowReducer,
});
