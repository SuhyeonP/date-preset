import { ICompareOptionsProps } from './types';

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
