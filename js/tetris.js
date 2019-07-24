//tetris game creted by nittin sharma
//github - nittinsharma37
//instagram - nittineditz

let canvas;
let ctx;
let gbArrayHeight = 20;
let gbArrayWidth = 12;
let startX = 4;
let startY = 0;
let coordinateArray = [...Array(gbArrayHeight)].map(e => Array(gbArrayWidth).fill(0));
let curTetromino = [[1,0], [0,1], [1,1], [2,1]];

let tetrominos = [];
let tetrominoColors = ['blue', 'cyan', 'green', 'purple', 'yellow', 'orange', 'red'];
let curTetrominoColor;

let gameBoardArray = [...Array(gbArrayHeight)].map(e => Array(gbArrayWidth).fill(0));

let DIRECTION = {
    IDLE: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
};

let DIRECTION;

class Coordinates{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

document.addEventListener('DOMContentLoaded', SetupCanvas);

function CreateCoordArray(){
    let i = 0, j = 0;
    for(let y = 9; y <= 446; y += 23){
        for(let x = 11; x <= 264; x += 23){
            coordinateArray[i][j] = new Coordinates(x,y);
            i++;
        }
        j++;
        i = 0;
    }
}

function SetupCanvas(){
    canvas = document.getElementById('mycanvas');
    ctx = canvas.getContext('2d');
    canvas.width = 936;
    canvas.height = 956;
    
    ctx.scale(2,2);

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(8, 8, 280, 462);

    CreateCoordArray();
    DrawTetromino();
}

function DrawTetromino(){
    for(let i = 0; i < curTetromino.length; i++){
     let x = curTetromino[i][0] + startX;  
     let y = curTetromino[i][1] + startY; 
     gameBoardArray[x][y] = 1;
     let coorX = coordinateArray[x][y].x;
     let coorY = coordinateArray[x][y].y;
     ctx.fillStyle = curTetrominoColor;
     ctx.fillRect(coorX, coorY, 21, 21);
    }
}