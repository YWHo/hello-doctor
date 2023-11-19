import { combineReducers } from 'redux';
import pendingAppointmentReducer from './pendingAppointmentReducer';
import providerProfileReducer from './providerProfileReducer';
import timeSlotsReducer from './timeSlotsReducer';
import uiShowReducer from './uiShowReducer';

const reducers = combineReducers({
  pendingAppointmentReducer,
  timeSlotsReducer,
  providerProfileReducer,
  uiShowReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
