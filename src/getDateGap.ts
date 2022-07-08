import { GapType, IGapOption, IGapResult } from './types';

const calculate = {
  round(num: number) {
    return Math.round(num);
  },
  ceil(num: number) {
    return Math.ceil(num);
  },
  floor(num: number) {
    return Math.floor(num);
  },
};

function getDateOfGap(origin: number, compare: number, option?: IGapOption): IGapResult {
  const divideType = option?.divide ?? 'round';

  const timeGap = Math.abs(origin - compare);
  const secondGap = calculate[divideType](timeGap / 1000);
  const minuteGap = calculate[divideType](secondGap / 60);
  const hourGap = calculate[divideType](minuteGap / 60);
  const dateGap = calculate[divideType](hourGap / 24);

  let gap: GapType = 'today';
  if (origin - compare > 0 && dateGap !== 0) {
    gap = 'future';
  } else if (origin - compare < 0 && dateGap !== 0) {
    gap = 'past';
  }

  return {
    dateGap,
    hourGap,
    minuteGap,
    secondGap,
    timeGap,
    bigger: origin < compare ? compare : origin,
    gap,
  };
}

export default getDateOfGap;
