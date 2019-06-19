import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

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
  const givenTime = dayjs(givenDate, 'HH:mm');

  return isInTimeRange(startTime, endTime, givenTime);
}
