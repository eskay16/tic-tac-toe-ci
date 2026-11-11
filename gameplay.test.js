const { GamePlay, CheckWinner } = require("./index");

describe("GamePlay integration tests", () => {
  beforeEach(() => jest.spyOn(console, "log").mockImplementation(() => {}));
  afterEach(() => jest.restoreAllMocks());

  test("new game starts with an empty 3x3 board", () => {
    const game = GamePlay();
    expect(game.getGameBoard()).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  test("players alternate between X and O", () => {
    const game = GamePlay();
    game.playGame(0, 0);
    game.playGame(1, 1);
    expect(game.getGameBoard()[0][0]).toBe("X");
    expect(game.getGameBoard()[1][1]).toBe("O");
  });

  test("an occupied cell cannot be overwritten", () => {
    const game = GamePlay();
    game.playGame(0, 0); // X
    game.playGame(0, 0); // O tries the same cell
    expect(game.getGameBoard()[0][0]).toBe("X");
  });

  test("full game: X wins on the top row", () => {
    const game = GamePlay();
    [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]].forEach(([r, c]) =>
      game.playGame(r, c)
    );
    expect(CheckWinner(game.getGameBoard())).toBe("X");
    expect(console.log).toHaveBeenLastCalledWith("The winner is player 1");
  });
});
