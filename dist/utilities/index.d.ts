/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
import * as Highcharts from 'highcharts';
export declare function getRandomData(scale: number, balanced?: boolean, count?: number, timeseries?: boolean): Array<number | {
    x: number;
    y: number;
}>;
export declare function sharedTooltipFormatter(context: Highcharts.TooltipFormatterContextObject, units?: string[], rounding?: number[]): string;
export declare function sharedTimeTooltipFormatter(context: Highcharts.TooltipFormatterContextObject, units?: string[], rounding?: number[]): string;
export declare function simpleTooltipFormatter(context: Highcharts.TooltipFormatterContextObject, units?: string, rounding?: number): string;