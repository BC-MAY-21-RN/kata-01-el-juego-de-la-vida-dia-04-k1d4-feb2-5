class Cell {
  constructor(posX, posY, status, neighbors) {
    this.posX = posX;
    this.posY = posY;
    this.status = status;
    this.neighbors = neighbors;
  }

  getPosX() {
    return this.posX;
  }

  getPosY() {
    return this.posY;
  }







}

module.exports = Cell;
