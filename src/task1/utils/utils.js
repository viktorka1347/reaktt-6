import moment from 'moment';

export function getTime(offset) {
  return moment().utcOffset(offset).format('HH:mm:ss');
}

export function getAngles(time) {
  const result = {};

  result.hourAngle = +time.slice(0, 2) % 12;
  result.minAngle = +time.slice(3, 5);
  result.secAngle = +time.slice(6, 8);

  result.hourAngle = result.hourAngle * 30 + Math.trunc(result.minAngle / 2);
  result.minAngle *= 6;
  result.secAngle *= 6;

  return result;
}
