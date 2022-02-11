const Cell = require('./Cell');

class Board {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;

    this.printBoard();
  }

  createBoard() {
    const board = new Array(this.columns).fill([]);

    for (let i = 0; i < board.length; i += 1) {
      board[i] = new Array(this.rows).fill([]);

      for (let j = 0; j < board[i].length; j += 1) {
        let stateRandom = Math.round(Math.random() * 10);
        board[i][j] = stateRandom;

        if (stateRandom > 8) {
          stateRandom = ' * ';
        } else {
          stateRandom = ' . ';
        }
        board[i][j] = stateRandom;

        /* let cell = new Celula(posx, posy, stateRandom, vecinos) */
      }
    }

    return board;
  }

  printBoard() {
    const board = this.createBoard();
    const printArr = [];
    let printString = '';

    for (let i = 0; i < this.rows; i += 1) {
      printString = '';
      for (let j = 0; j < board.length; j += 1) {
        printString += board[j][i];
      }

      printArr.push(printString);
    }
    return printArr.join('\n');
  }
}

module.exports = Board;
