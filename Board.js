class Board {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;

    this.printBoard();
    this.printSecondGeneration();
    // this.checkNeighbors();
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

  printSecondGeneration() {
    const boardSecond = this.checkNeighbors();

    const printArr = [];
    let printString = '';

    for (let i = 0; i < this.rows; i += 1) {
      printString = '';
      for (let j = 0; j < boardSecond.length; j += 1) {
        printString += boardSecond[j][i];
      }

      printArr.push(printString);
    }
    return printArr.join('\n');
  }

  /* ----------------------------------------------------- */
  checkNeighbors() {
    let contarvecino = 0;
    let limitLeft = 0;
    let limitRight = 0;
    let limitTop = 0;
    let limitBottom = 0;

    const board = this.createBoard();

    // horizontal
    for (let x = 0; x < this.columns; x += 1) {
      // vertical
      for (let y = 0; y < this.rows; y += 1) {
        limitLeft = x - 1; // [0,1] 0
        limitRight = x + 1; // [2,1] 2
        limitTop = y - 1; // [1,0] 0
        limitBottom = y + 1; // [1,2] 2
        if (limitLeft < 0) {
          limitLeft = -1;
        }
        if (limitRight < 0) {
          limitRight = -1;
        }
        if (limitTop < 0) {
          limitTop = -1;
        }
        if (limitBottom < 0) {
          limitBottom = -1;
        }

        // diagonal izquierda arriba
        if (limitLeft >= 0 && limitTop >= 0) {
          if (board[limitLeft][limitTop] === ' * ') {
            // contarvecino = contarvecino + 1;
            contarvecino += contarvecino;
          }
        }
        // izquierda
        if (limitLeft >= 0) {
          if (board[limitLeft][y] === ' * ') {
            // contarvecino = contarvecino + 1;
            contarvecino += contarvecino;
          }
        }
        // diagonal izquierda abajo
        if (limitLeft >= 0 && limitBottom >= 0) {
          if (board[limitLeft][limitBottom] === ' * ') {
            // contarvecino = contarvecino + 1;
            contarvecino += contarvecino;
          }
        }

        // arriba
        if (limitTop >= 0) {
          if (board[x][limitTop] === ' * ') {
            // contarvecino = contarvecino + 1;
            contarvecino += contarvecino;
          }
        }

        // abajo
        if (limitBottom >= 0) {
          // console.log('x: ', x, 'limitBottom: ', limitBottom);
          // console.log('matrix: ', board[x][limitBottom]);
          if (board[x][limitBottom] === ' * ') {
            // contarvecino = contarvecino + 1;
            contarvecino += contarvecino;
          }
        }

        // diagonal derecha arriba
        if (limitRight >= 0 && limitRight < this.columns && limitTop >= 0) {
          // console.log('x: ', limitRight);
          // console.log('y: ', limitTop);
          if (board[limitRight][limitTop] === ' * ') {
            // contarvecino = contarvecino + 1;
            contarvecino += contarvecino;
          }
        }
        // derecha
        if (limitRight >= 0 && limitRight < this.columns) {
          // console.log('x: ', limitRight);
          // console.log('y: ', y);
          if (board[limitRight][y] === ' * ') {
            // contarvecino = contarvecino + 1;
            contarvecino += contarvecino;
          }
        }
        // diagonal derecha abajo
        if (
          limitRight >= 0
          && limitRight <= this.columns
          && limitBottom >= 0
          && limitBottom <= this.rows
        ) {
          contarvecino += contarvecino;
          //   if (this.matrix[limitRight][limitBottom] === ' * ') {
          //     contarvecino = contarvecino + 1;
          //   }
        }

        // 1. Cualquier célula viva con menos de dos vecinas vivas muere,
        // como si la causa fuera la subpoblación.
        // 3. Cualquier celda viva con dos o tres vecinos vivos vive en la próxima generación.
        if (board[x][y] === ' * ') {
          if (contarvecino === 2 || contarvecino === 3) {
            board[x][y] = ' * ';
          } else {
            board[x][y] = ' . ';
          }
        }
        if (board[x][y] === ' . ') {
          if (contarvecino === 3) {
            board[x][y] = ' * ';
          }
        }
        /* else{
          if (contarvecino === 3) {
            board[x][y] = ' * ';
          }
          // return;
        } */
        // console.log(board[x][y]);
      }
      // console.log('--');
    }
    // console.log(board)
    return board;
  }
  /* ----------------------------------------------------- */
}

module.exports = Board;
