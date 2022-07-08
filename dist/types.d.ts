export declare type DateRange = 'today' | 'yesterday' | 'last7' | 'last14' | 'last30' | 'last90' | 'thisWeek' | 'thisMonth' | 'thisQuarter' | 'last6m' | 'last1y';
export declare type IndicateDates = 'last14' | 'last90' | 'last6m' | 'last1y' | 'last30' | 'last7';
export declare type DivideType = 'round' | 'ceil' | 'floor';
export declare type GapType = 'future' | 'past' | 'today';
export interface IDateArray {
    label: string;
    value: DateRange;
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
