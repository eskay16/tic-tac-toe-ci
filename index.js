function Gameboard() {
  const row = 3;
  const column = 3;
  const gameboard = [];

  for (let i = 0; i < row; i++) {
    const rowArray = [];
    for (let j = 0; j < column; j++) {
      rowArray.push(Cell());
    }
    gameboard.push(rowArray);
  }
  return { gameboard };
}

function Cell() {
  let value = "";

  const setValue = (player) => {
    value = player;
  };
  const getCellValue = () => value;
  return { setValue, getCellValue };
}

function GamePlay(boardFactory = Gameboard) {
  const { gameboard } = boardFactory();
  const players = [
    {
      name: "player 1",
      value: "X",
    },
    {
      name: "player 2",
      value: "O",
    },
  ];
  let playerTurn = players[0];

  const playGame = (row, column) => {
    const playerMove = () => {
      const intendedCell = gameboard[row][column];

      if (intendedCell.getCellValue() != "") {
        return `${playerTurn.name} please play again, that spot is filled`;
      }
      intendedCell.setValue(playerTurn.value);
    };
    playerMove();
    if (playerTurn.value === gameboard[row][column].getCellValue())
      changeTurn();
    const winner = CheckWinner();
    if(winner){
        console.log(winner === players[0].value? `The winner is ${players[0].name}`: `The winner is ${players[1].name}` )
        return;
    } 
    console.log(`${playerTurn.name} it is your turn to play`);
  };

  const changeTurn = () => {
    playerTurn = playerTurn === players[0] ? players[1] : players[0];
  };
  const printGame = () => {
    console.log(gameboard.map((row) => row.map((cell) => cell.getCellValue())));
  };

  const getGameBoard = () => {
    return gameboard.map((row) => row.map((cell) => cell.getCellValue()));
  };
  return { printGame, playGame, getGameBoard };
}
const game = GamePlay();

function CheckWinner(gameboard = game.getGameBoard()) {
  //let gameboard = game.getGameBoard();
  let isAWinner = false;

  const diagonal1 = [gameboard[0][0], gameboard[1][1], gameboard[2][2]];
  const diagonal2 = [gameboard[2][0], gameboard[1][1], gameboard[0][2]];
  const checkDiagonal = [[...diagonal1], [...diagonal2]];
  const vertical = [];
  for (let win in checkDiagonal) {
    isAWinner =
      checkDiagonal[win][0] != "" &&
      checkDiagonal[win].every((val) => val === checkDiagonal[win][0]);
    if (isAWinner) return checkDiagonal[win][0];
  }

  for (let element in gameboard) {
    isAWinner =
      gameboard[element][0] != "" &&
      gameboard[element].every((val) => val === gameboard[element][0]);
    if (isAWinner) return gameboard[element][0];
  }

  for (let i = 0; i < gameboard.length; i++) {
    vertical.push([gameboard[0][i], gameboard[1][i], gameboard[2][i]]);
  }

  for (let i = 0; i < vertical.length; i++) {
    isAWinner =
      vertical[i][0] != "" &&
      vertical[i].every((val, i, element) => val === element[0]);
    if (isAWinner) return vertical[i][0];
  }
}

module.exports = { Gameboard, Cell, GamePlay, CheckWinner };