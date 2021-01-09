const date = {
  getCurrentDate: () =>
    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
      .toJSON()
      .slice(0, 19),
};

export const getTimeTillNow = (time) => {
  const Time = {
    MILLISECONDS_PER_SECOND: 1000,
    SECONDS_PER_MINUTE: 60,
    MINUTES_PER_HOUR: 60,
    HOURS_PER_DAY: 24,
    DAYS_PER_MONTH: 30,
    MONTHES_PER_YEAR: 12,
  };

  const now = new Date();
  const fromTime = new Date(time);

  const minutesTillNow = parseInt(
    (
      (now.getTime() - fromTime.getTime()) /
      (Time.MILLISECONDS_PER_SECOND * Time.SECONDS_PER_MINUTE)
    ).toString()
  );
  if (minutesTillNow < Time.MINUTES_PER_HOUR)
    return minutesTillNow.toString() + "분";

  const hoursTillNow = minutesTillNow / Time.MINUTES_PER_HOUR;
  if (hoursTillNow < Time.HOURS_PER_DAY)
    return parseInt(hoursTillNow.toString()).toString() + "시간";

  const daysTillNow = now.getDate() - fromTime.getDate();
  if (daysTillNow <= Time.DAYS_PER_MONTH)
    return parseInt(daysTillNow.toString()).toString() + "일";

  const monthsTillNow = daysTillNow / Time.DAYS_PER_MONTH;
  if (monthsTillNow < Time.MONTHES_PER_YEAR)
    return parseInt(monthsTillNow.toString()).toString() + "달";

  const yearsTillNow = monthsTillNow / Time.MONTHES_PER_YEAR;

  return parseInt(yearsTillNow.toString()).toString() + "년";
};

export default date;
