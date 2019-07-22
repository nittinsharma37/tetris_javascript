//tetris game creted by nittin sharma
//github - nittinsharma37
//instagram - nittineditz

let canvas;
let ctx;
let gbArrayHeight = 20;
let gbArrayWidth = 12;
let startX = 4;
let startY = 0;
let cordinateArray = [...Array(gbArrayHeight)].map(e => Array(gbArrayWidth).fill(0));