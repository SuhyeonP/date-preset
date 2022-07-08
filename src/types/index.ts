export type DateRange =
  | 'today'
  | 'yesterday'
  | 'last7'
  | 'last14'
  | 'last30'
  | 'last90'
  | 'thisWeek'
  | 'thisMonth'
  | 'thisQuarter'
  | 'last6m'
  | 'last1y'
  | 'entire';

export type IndicateDates = 'last14' | 'last90' | 'last6m' | 'last1y' | 'last30' | 'last7';

export type DivideType = 'round' | 'ceil' | 'floor';
export type GapType = 'future' | 'past' | 'today';

export interface ICompareOptionsProps {
  except_time?: boolean;
}

export interface IDateArray {
  label: string;
  value: Partial<DateRange>;
}

export interface IGapOption {
  divide: DivideType;
}

export interface IGapResult {
  dateGap: number;
  hourGap: number;
  minuteGap: number;
  secondGap: number;
  timeGap: number;
  bigger: number;
  gap: GapType;
}

export type StringOrDate = string | Date;
