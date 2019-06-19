import dayjs from 'dayjs';

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
