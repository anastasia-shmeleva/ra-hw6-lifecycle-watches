import moment from 'moment';

export default function getTime(clock) {
  const hUtc = parseInt(moment().utc().format('h'));
  const mUtc = parseInt(moment().utc().format('m'));
  const sUtc = parseInt(moment().utc().format('s'));
  let hour;
  let minute;

  if ((clock.tzone % 1 === 0) === true) {
    hour = hUtc + parseInt(clock.tzone);
    minute = mUtc;
  } else {
    const tzH = Math.floor(clock.tzone);
    const tzM =  30;
    hour = hUtc + tzH;
    minute = mUtc + tzM;

  }

  return [hour, minute, sUtc];
}