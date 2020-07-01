"use strict";
/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
Object.defineProperty(exports, "__esModule", { value: true });
/*
  This file contains various elements used to style the charts.

  pxblueColors: an array of pxblue 500 and 300 level colors
  sizes: an array of font sizes for various chart elements
*/
var PXBColors = require("@pxblue/colors");
exports.OpenSans = 'Open Sans';
exports.pxblueColors = [
    PXBColors.blue[500],
    PXBColors.red[500],
    PXBColors.green[500],
    PXBColors.purple[500],
    PXBColors.orange[500],
    PXBColors.gold[500],
    PXBColors.yellow[500],
    PXBColors.blue[300],
    PXBColors.red[300],
    PXBColors.green[300],
    PXBColors.purple[300],
    PXBColors.orange[300],
    PXBColors.gold[300],
    PXBColors.yellow[300],
];
exports.sizes = {
    title: '1.4em',
    subtitle: '1.1em',
    axisTitle: '1em',
    axisLabel: '.8em',
    tooltip: '1em',
};
