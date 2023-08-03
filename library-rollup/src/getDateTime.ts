/**
 * 获取: 日期 + 时间 + 毫秒
 * @param {Number | Date | undefined} params 参数
 * @returns {String} 2019-07-22 08:08:08.008
 */
const getDateTime = (params?: number | Date): string => {
  let d = new Date();
  if (typeof params === 'number') {
    d = new Date(params);
  } else if (params instanceof Date) {
    d = params;
  }
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const _month = month >= 10 ? month : `0${month}`;
  const date = d.getDate();
  const _date = date >= 10 ? date : `0${date}`;
  const hour = d.getHours();
  const _hour = hour >= 10 ? hour : `0${hour}`;
  const minute = d.getMinutes();
  const _minute = minute >= 10 ? minute : `0${minute}`;
  const second = d.getSeconds();
  const _second = second >= 10 ? second : `0${second}`;
  const millisecond = d.getMilliseconds();
  const _millisecond = millisecond >= 100 ? millisecond : millisecond >= 10 ? `0${millisecond}` : `00${millisecond}`;
  return `${year}-${_month}-${_date} ${_hour}:${_minute}:${_second}.${_millisecond}`;
};

export default getDateTime;
