import { useStyles } from "../../Tetris.style";
import { GameState, Point } from "../../Tetris.types";
import { isTetriminoInPoint } from "../../Tetris.utils";

interface GameBoardProps {
  gameState: GameState;
}

export default function GameBoard({ gameState }: GameBoardProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div className={classes.layout}>
        <div className={classes.container}>
          <div className={classes.board}>
            {gameState.board.map((row, rowIndex) => {
              return (
                <div className={classes.row} key={`row-${rowIndex}`}>
                  {row.map((cell, columnIndex) => {
                    const style = { backgroundColor: "" };
                    const point = { row: rowIndex, col: columnIndex } as Point;
                    if (
                      isTetriminoInPoint(
                        gameState.currentTetromino.currentPosition,
                        point,
                      )
                    ) {
                      style.backgroundColor = gameState.currentTetromino.color;
                    }

                    return (
                      <div
                        className={classes.cell}
                        key={`cell-${rowIndex}-${columnIndex}`}
                        style={style}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
