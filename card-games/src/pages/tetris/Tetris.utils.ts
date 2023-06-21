import { moveDirections } from "./Tetris.constants";
import { GameState, Point, Position } from "./Tetris.types";

export const moveTetromino = (
  gameState: GameState,
  direction: moveDirections,
): GameState => {
  const currentPosition = gameState?.currentTetromino?.currentPosition;
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
 ** Checks if there is a tetromino in the given position
 */
export const isTetriminoInPoint = (
  position: Position,
  point: Point,
): boolean => {
  return position.some((minoPosition) => {
    if (minoPosition.row === point.row && minoPosition.col === point.col) {
      return true;
    }
    return false;
  });
};
