class Board {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;

    this.printBoard();
    this.checkNeighbors();
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

/* ----------------------------------------------------- */
checkNeighbors() {
    let contarvecino = 0;
    let limit_l = 0;
    let limit_r = 0;
    let limit_t = 0;
    let limit_b = 0;

    const board = this.createBoard();

    //horizontal
    for (let x = 0; x < this.columns; x++) 
    {
      //vertical
      for (let y = 0; y < this.rows; y++) 
      {
        limit_l = x - 1; // [0,1] 0
        limit_r = x + 1; // [2,1] 2
        limit_t = y - 1; // [1,0] 0
        limit_b = y + 1; // [1,2] 2
        if (limit_l < 0) 
        {
          limit_l = -1;
        }
        if (limit_r < 0) {
          limit_r = -1;
        }
        if (limit_t < 0) {
          limit_t = -1;
        }
        if (limit_b < 0) {
          limit_b = -1;
        }

        //diagonal izquierda arriba
        if (limit_l >= 0 && limit_t >= 0) {
          if (board[limit_l][limit_t] == '*') {
            contarvecino = contarvecino + 1;
          }
        }
        //izquierda
        if (limit_l >= 0) {
          if (board[limit_l][y] == '*') {
            contarvecino = contarvecino + 1;
          }
        }
        //diagonal izquierda abajo
        if (limit_l >= 0 && limit_b >= 0) {
          if (board[limit_l][limit_b] == '*') {
            contarvecino = contarvecino + 1;
          }
        }

        //arriba
        if (limit_t >= 0) {
          if (board[x][limit_t] == '*') {
            contarvecino = contarvecino + 1;
          }
        }

        //abajo
        if (limit_b >= 0) {
          // console.log('x: ', x, 'limit_b: ', limit_b);
          // console.log('matrix: ', board[x][limit_b]);
          if (board[x][limit_b] == ' * ') {
            contarvecino = contarvecino + 1;
          }
        }

        //diagonal derecha arriba
        if (limit_r >= 0 && limit_r < this.columns && limit_t >= 0) {
          //console.log('x: ', limit_r);
          //console.log('y: ', limit_t);
          if (board[limit_r][limit_t] == '*') {
            contarvecino = contarvecino + 1;
          }
        }
        //derecha
        if (limit_r >= 0 && limit_r < this.columns) {
          //console.log('x: ', limit_r);
          //console.log('y: ', y);
          if (board[limit_r][y] == '*') {
            contarvecino = contarvecino + 1;
          }
        }
        //diagonal derecha abajo
        if (
          limit_r >= 0 &&
          limit_r <= this.columns &&
          limit_b >= 0 &&
          limit_b <= this.rows
        ) {
          //   if (this.matrix[limit_r][limit_b] == '*') {
          //     contarvecino = contarvecino + 1;
          //   }
        }

        // 1. Cualquier célula viva con menos de dos vecinas vivas muere, como si la causa fuera la subpoblación.
        // 3. Cualquier celda viva con dos o tres vecinos vivos vive en la próxima generación.
        if (board[x][y] == '*') {
          if (contarvecino == 2 || contarvecino == 3) {
            board[x][y] = '*';
          } else {
            board[x][y] = '.';
          }
        } else {
          if (contarvecino == 3) {
            board[x][y] = '*';
          }
        }
        console.log(board[x][y]);
      }
      console.log('--');
    }
  }
/* ----------------------------------------------------- */
}

module.exports = Board;
