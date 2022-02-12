const Board = require('./Board');

const board = new Board(8, 4);

console.log('Primera generación:');
console.log(board.printBoard());
console.log('Segunda generación:');
console.log(board.checkNeighbors());
