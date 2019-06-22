import dayjs from 'dayjs';
import { DAY_MORNING, DAY_AFTERNOON, DAY_EVENING } from '../constants';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export function getDatesOfPreviousTwoDaysFrom(givenDate) {
  const startDate = dayjs(givenDate);
  const previous1stDay = startDate.add(-1, 'days').format('YYYY-MM-DD');
  const previous2ndDay = startDate.add(-2, 'days').format('YYYY-MM-DD');
  return [previous2ndDay, previous1stDay];
}

export function getDatesInThreeMonthsFrom(givenDate) {
  const startDate = dayjs(givenDate);
  const daysThisMonth = startDate.daysInMonth() - startDate.format('D');
  const daysNextMonth = startDate.add(1, 'month').daysInMonth();
  const days2ndNextMonth = startDate.add(2, 'month').daysInMonth();
  const totalDays = daysThisMonth + daysNextMonth + days2ndNextMonth;
  let dates = [];
  for (let i = 0; i <= totalDays; i++) {
    const tmpDate = startDate.add(i, 'days').format('YYYY-MM-DD');
    dates.push(tmpDate);
  }
  return dates;
}

function isInTimeRange(startTime, endTime, givenTime) {
  return (
    (givenTime.isSame(startTime) || givenTime.isAfter(startTime)) &&
    givenTime.isBefore(endTime)
  );
}

export function isMorningTime(givenDate) {
  const startTime = dayjs('08:00', 'HH:mm');
  const endTime = dayjs('12:00', 'HH:mm');
  const givenTime = dayjs(dayjs(givenDate).format('HH:mm'), 'HH:mm');

  return isInTimeRange(startTime, endTime, givenTime);
}

export function isAfternoonTime(givenDate) {
  const startTime = dayjs('12:00', 'HH:mm');
  const endTime = dayjs('17:00', 'HH:mm');
  const givenTime = dayjs(dayjs(givenDate).format('HH:mm'), 'HH:mm');

  return isInTimeRange(startTime, endTime, givenTime);
}

export function isEveningTime(givenDate) {
  const startTime = dayjs('17:00', 'HH:mm');
  const endTime = dayjs('20:01', 'HH:mm');
  const givenTime = dayjs(dayjs(givenDate).format('HH:mm'), 'HH:mm');

  return isInTimeRange(startTime, endTime, givenTime);
}

export function hasMorningTimeInSchedules(schedules = []) {
  for (let drSchedule of schedules) {
    const { AvailableSlots = {} } = drSchedule;
    for (let key in AvailableSlots) {
      const theDate = AvailableSlots[key];
      if (isMorningTime(theDate)) {
        return true;
      }
    }
  }
  return false;
}

export function hasAfternoonTimeInSchedules(schedules = []) {
  for (let drSchedule of schedules) {
    const { AvailableSlots = {} } = drSchedule;
    for (let key in AvailableSlots) {
      const theDate = AvailableSlots[key];
      if (isAfternoonTime(theDate)) {
        return true;
      }
    }
  }
  return false;
}

export function hasEveningTimeInSchedules(schedules = []) {
  for (let drSchedule of schedules) {
    const { AvailableSlots = {} } = drSchedule;
    for (let key in AvailableSlots) {
      const theDate = AvailableSlots[key];
      if (isEveningTime(theDate)) {
        return true;
      }
    }
  }
  return false;
}

export function filterTimeSlotByPartOfDay(
  timeSlots = {},
  partOfDay = DAY_MORNING
) {
  let startTime = dayjs('08:00', 'HH:mm');
  switch (partOfDay) {
    case DAY_AFTERNOON:
      startTime = dayjs('12:00', 'HH:mm');
      break;
    case DAY_EVENING:
      startTime = dayjs('17:00', 'HH:mm');
      break;
    default:
      return timeSlots;
  }

  const newTimeSlot = {};
  const timeKeys = Object.keys(timeSlots);
  timeKeys.forEach(key => {
    const availTime = dayjs(dayjs(timeSlots[key]).format('HH:mm'), 'HH:mm');
    if (availTime.isSame(startTime) || availTime.isAfter(startTime)) {
      newTimeSlot[key] = timeSlots[key];
    }
  });

  return newTimeSlot;
}
