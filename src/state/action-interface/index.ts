import {
  ClearSelectedDateAction,
  ClearSelectedDayPartAction,
  ClearSelectedTimeIdAction,
  SaveSelectedDateAction,
  SaveSelectedDayPartAction,
  SaveSelectedTimeIDAction,
} from './pendingAppointmentActionInterface';
import {
  ClearProviderProfileAction,
  SaveProviderProfileAction,
} from './providerProfileActionInterface';
import {
  ClearSchedulesAction,
  SaveSchedulesAction,
} from './timeSlotsActionInterface';
import {
  ToggleShowingCalendarAction,
  ToggleShowingProfileAction,
} from './uiShowActionInterface';

export type IAction =
  | ClearSelectedDateAction
  | ClearProviderProfileAction
  | ClearSchedulesAction
  | ClearSelectedDayPartAction
  | ClearSelectedTimeIdAction
  | SaveProviderProfileAction
  | SaveSchedulesAction
  | SaveSelectedDateAction
  | SaveSelectedDayPartAction
  | SaveSelectedTimeIDAction
  | ToggleShowingCalendarAction
  | ToggleShowingProfileAction;
