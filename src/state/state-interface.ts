import dayjs from 'dayjs';
import { DAY } from '../shared/constants';

export interface ProviderProfileState {
  Degrees?: string[];
  Description?: string;
  Id?: string;
  Languages?: string[];
  Name?: string;
  PictureName?: string;
  PictureURL?: string;
  Title?: string;
}

export interface PendingAppointmentState {
  selectedDate?: Date | dayjs.Dayjs;
  selectedDayPart?: DAY;
  selectedTimeID?: string;
}

interface scheduleSlot {
  [key: string]: string | undefined;
}

export interface schedule {
  Id?: number;
  Title?: string;
  Name?: string;
  AvailableSlots?: scheduleSlot;
  PictureURL?: string;
  PictureName?: string;
}

export interface TimeSlotState {
  hasAfternoonTime?: boolean;
  hasEveningTime?: boolean;
  hasMorningTime?: boolean;
  schedules?: schedule[];
}

export interface UiShowState {
  showingCalendar?: boolean;
  showingProfile?: boolean;
}
