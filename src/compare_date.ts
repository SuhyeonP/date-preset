import { GapType, IGapOption, IGapResult } from './types';

interface ICompareOptionsProps {
  except_time?: boolean;
}

export function compareDate(origin: Date | string, compare: Date | string, options?: ICompareOptionsProps): boolean {
  const compare1 = new Date(origin);
  const compare2 = new Date(compare);

  const year1 = compare1.getFullYear();
  const year2 = compare2.getFullYear();

  const month1 = compare1.getMonth();
  const month2 = compare2.getMonth();

  const date1 = compare1.getDate();
  const date2 = compare2.getDate();

  if (options && options.except_time) {
    const com1 = new Date(year1, month1, date1, 0, 0, 0).getTime();
    const com2 = new Date(year2, month2, date2, 0, 0, 0).getTime();
    return com1 === com2;
  } else {
    return compare1.getTime() === compare2.getTime();
  }
}

export const calculate = {
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

export function getDateOfGap(origin: number, compare: number, option?: IGapOption): IGapResult {
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
