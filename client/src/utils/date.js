const date = {
  getCurrentDate: () =>
    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
      .toJSON()
      .slice(0, 19),
};

const Time = {
  MILLISECONDS_PER_SECOND: 1000,
  SECONDS_PER_MINUTE: 60,
  MINUTES_PER_HOUR: 60,
  HOURS_PER_DAY: 24,
  DAYS_PER_MONTH: 30,
  MONTHES_PER_YEAR: 12,
};

const calculateCurrentTime = (time) => {
  const now = new Date();
  const fromTime = new Date(time);
  let isMinus = false;

  let minutesTillNow = parseInt(
    (
      (now.getTime() - fromTime.getTime()) /
      (Time.MILLISECONDS_PER_SECOND * Time.SECONDS_PER_MINUTE)
    ).toString()
  );
  if (minutesTillNow < 0) {
    isMinus = true;
    minutesTillNow = Math.abs(minutesTillNow);
  }
  return [now, fromTime, isMinus, minutesTillNow];
};

export const getTimeTillNow = (time) => {
  const [now, fromTime, isMinus, minutesTillNow] = calculateCurrentTime(time);
  const lastWord = `${isMinus ? "후" : "전"}`;

  if (minutesTillNow < Time.MINUTES_PER_HOUR)
    return minutesTillNow.toString() + "분" + lastWord;

  const hoursTillNow = minutesTillNow / Time.MINUTES_PER_HOUR;
  if (hoursTillNow < Time.HOURS_PER_DAY)
    return parseInt(hoursTillNow.toString()).toString() + "시간" + lastWord;

  const daysTillNow = now.getDate() - fromTime.getDate();
  if (daysTillNow <= Time.DAYS_PER_MONTH)
    return parseInt(daysTillNow.toString()).toString() + "일" + lastWord;

  const monthsTillNow = daysTillNow / Time.DAYS_PER_MONTH;
  if (monthsTillNow < Time.MONTHES_PER_YEAR)
    return parseInt(monthsTillNow.toString()).toString() + "달" + lastWord;

  const yearsTillNow = monthsTillNow / Time.MONTHES_PER_YEAR;

  return parseInt(yearsTillNow.toString()).toString() + "년" + lastWord;
};

export default date;
