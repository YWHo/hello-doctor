import dayjs from 'dayjs';
import { DAY } from '../constants';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const memCache = {
  datesInThreeMonths: {},
  monthArray2d: {},
};

export function getDatesOfPreviousTwoDaysFrom(givenDate) {
  const startDate = dayjs(givenDate);
  const previous1stDay = startDate.add(-1, 'day').format('YYYY-MM-DD');
  const previous2ndDay = startDate.add(-2, 'day').format('YYYY-MM-DD');
  return [previous2ndDay, previous1stDay];
}

export function getDatesInThreeMonthsFrom(givenDate) {
  if (memCache.datesInThreeMonths[givenDate]) {
    return memCache.datesInThreeMonths[givenDate];
  }

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
  memCache.datesInThreeMonths[givenDate] = dates;
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
  partOfDay = DAY.MORNING,
) {
  let startTime = dayjs('08:00', 'HH:mm');
  switch (partOfDay) {
    case DAY.AFTERNOON:
      startTime = dayjs('12:00', 'HH:mm');
      break;
    case DAY.EVENING:
      startTime = dayjs('17:00', 'HH:mm');
      break;
    default:
      return timeSlots;
  }

  const newTimeSlot = {};
  const timeKeys = Object.keys(timeSlots);
  timeKeys.forEach((timeID) => {
    const availTime = dayjs(dayjs(timeSlots[timeID]).format('HH:mm'), 'HH:mm');
    if (availTime.isSame(startTime) || availTime.isAfter(startTime)) {
      newTimeSlot[timeID] = timeSlots[timeID];
    }
  });

  return newTimeSlot;
}

export function filterTimePassedNow(timeSlots = {}, today = dayjs()) {
  const newTimeSlot = {};
  const timeKeys = Object.keys(timeSlots);
  timeKeys.forEach((timeID) => {
    const availTime = dayjs(timeSlots[timeID]);
    if (availTime.isAfter(dayjs(today))) {
      newTimeSlot[timeID] = timeSlots[timeID];
    }
  });

  return newTimeSlot;
}

export function getWeekdayLabels() {
  return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
}

export function getFirstDayOfMonthOf(date) {
  return dayjs(date).startOf('month').format('d');
}

export function getMonthArray2dOf(date) {
  const monthYear = dayjs(date).format('YYYY-MM');
  if (memCache.monthArray2d[monthYear]) {
    return memCache.monthArray2d[monthYear];
  }
  const blank = [];
  for (let i = 0; i < getFirstDayOfMonthOf(date); i++) {
    blank.push('');
  }
  const days = [];
  for (let i = 1; i <= dayjs(date).daysInMonth(); i++) {
    if (i >= 10) {
      days.push(`${monthYear}-${i}`);
    } else {
      days.push(`${monthYear}-0${i}`);
    }
  }
  const list = blank.concat(days);
  const rows = [];
  let cells = [];
  for (let i = 0; i < list.length; i++) {
    if (i !== 0 && i % 7 === 0) {
      rows.push(cells);
      cells = [];
      cells.push(list[i]);
    } else {
      cells.push(list[i]);
    }
    if (i === list.length - 1) {
      rows.push(cells);
    }
  }
  memCache.monthArray2d[monthYear] = rows;
  return rows;
}
