import { IGapOption, IGapResult } from './types';
interface ICompareOptionsProps {
    except_time?: boolean;
}
export declare function compareDate(origin: Date | string, compare: Date | string, options?: ICompareOptionsProps): boolean;
export declare const calculate: {
    round(num: number): number;
    ceil(num: number): number;
    floor(num: number): number;
};
export declare function getDateOfGap(origin: number, compare: number, option?: IGapOption): IGapResult;
export {};
