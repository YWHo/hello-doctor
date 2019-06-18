import moment from 'moment';

export function getDatesInThreeMonthsFrom(givenDate) {
  const startDate = givenDate || moment();
  const daysThisMonth =
    moment(startDate).daysInMonth() - moment(startDate).format('D');
  const daysNext2Months =
    moment(startDate)
      .add(1, 'months')
      .daysInMonth() +
    moment(startDate)
      .add(2, 'months')
      .daysInMonth();
  const totalDays = daysThisMonth + daysNext2Months;
  let dates = [];
  for (let i = 0; i <= totalDays; i++) {
    const tmpDate = moment(startDate)
      .add(i, 'days')
      .format('YYYY-MM-DD');
    dates.push(tmpDate);
  }
  return dates;
}
