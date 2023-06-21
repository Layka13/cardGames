import { moveDirections, tetrominos } from "./Tetris.constants";
import { GameState, Point, Position, Tetromino } from "./Tetris.types";
import {
  BoardRow,
  Board,
  BoardCell,
} from "./components/gameBoard/GameBoard.types";

export const moveTetromino = (
  gameState: GameState,
  direction: moveDirections,
): GameState => {
  const currentPosition = gameState.currentTetromino.currentPosition;
  const newPosition = getNextTetrominoPosition(direction, currentPosition);
  return {
    ...gameState,
    currentTetromino: {
      ...gameState.currentTetromino,
      currentPosition: newPosition,
    },
  };
};

/*
 ** Get the next position of a tetromino based on the direction of movement
 */
export const getNextTetrominoPosition = (
  direction: moveDirections,
  position: Position,
): Position => {
  return position.map(
    (point) =>
      ({
        row: point.row + (direction === moveDirections.down ? 1 : 0),
        col:
          point.col +
          (direction === moveDirections.right
            ? 1
            : direction === moveDirections.left
            ? -1
            : 0),
      } as Point),
  ) as Position;
};

/*
 ** Checks if the given tetromino is in the given position
 */
export const isTetriminoInPoint = (
  position: Position,
  point: Point,
): boolean => {
  return position.some((p) => {
    if (p.row === point.row && p.col === point.col) {
      return true;
    }
    return false;
  });
};

/** initiate game state */
export const initGameState = (): GameState => {
  const rows = Array(20).fill(null);
  const columns = Array(10).fill(null);
  const board = rows.map(() => {
    return columns.map(() => {
      return { color: "" } as BoardCell;
    }) as BoardRow;
  }) as Board;

  const firstTetromino: Tetromino = tetrominos[0];
  return {
    gameStarted: false,
    board,
    currentTetromino: firstTetromino,
  };
};
