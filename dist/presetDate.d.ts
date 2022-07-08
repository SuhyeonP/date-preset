import { DateRange, IDateArray, IndicateDates } from './types';
export declare const selectDays: Record<IndicateDates, string>;
export declare const dateRange: Record<DateRange, [Date, Date]>;
export declare const date_preset: Record<string, IDateArray[]>;
export declare function makeDateTimeInfo(inputDate: string | Date): string;
