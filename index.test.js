const { Gameboard, Cell, CheckWinner } = require("./index");

test("gameboard array of objects", ()=>{
    expect(Gameboard()).toEqual(
        {
            gameboard : [
            expect.arrayContaining([
                {
                    setValue: expect.any(Function),
                    getCellValue: expect.any(Function)
                    
                    
                }
            ]),
            expect.arrayContaining([
                {
                    setValue: expect.any(Function),
                    getCellValue: expect.any(Function)
                }
            ]),
           expect.arrayContaining([
                {
                    setValue: expect.any(Function),
                     getCellValue: expect.any(Function)
                    
                   
                }
            ])
        ]
        }
        
    )
});

test("each cell in array", ()=>{
    expect(Cell()).toEqual(
        {
            setValue : expect.any(Function), 
            getCellValue : expect.any(Function)
        }
    );
});

describe('CheckWinner unit Tests', () => {
  test('returns undefined for empty board', () => {
    const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    expect(CheckWinner(board)).toBeUndefined();
  });

  test('detects horizontal win for X', () => {
    const board = [
      ["X", "X", "X"],
      ["", "O", ""],
      ["O", "", "O"]
    ];
    expect(CheckWinner(board)).toBe("X");
  });

  test('detects vertical win for O', () => {
    const board = [
      ["O", "X", ""],
      ["O", "X", ""],
      ["O", "", ""]
    ];
    expect(CheckWinner(board)).toBe("O");
  });

  test('detects diagonal win for X', () => {
    const board = [
      ["X", "O", ""],
      ["O", "X", ""],
      ["", "", "X"]
    ];
    expect(CheckWinner(board)).toBe("X");
  });
});