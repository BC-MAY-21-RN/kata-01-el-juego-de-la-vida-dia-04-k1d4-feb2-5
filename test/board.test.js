const Board = require('../Board');

describe('Test on the class Board', () => {

  const columns = 8;
  const rows = 4;

  const board = new Board(columns, rows);

  test('The board array must not be empty', () => {
    expect(board.createBoard()).not.toBeNull();
  });

  test('the board must have n columns', () => {
    expect(board.createBoard()).toHaveLength(columns);
  });

  test('the row must have n rows', () => {
    board.createBoard().forEach((row) => {
      expect(row).toHaveLength(rows);
    });
  });
});


