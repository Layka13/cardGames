import { Board } from "./components/gameBoard/GameBoard.types";

export type GameState = {
  board: Board;
  gameStarted: boolean;
  currentTetromino: Tetromino;
};

export type Tetromino = {
  type: string;
  currentPosition: Position;
  initialPosition: Position;
  color: string;
};

export type Position = [Point, Point, Point, Point];

export type Point = {
  col: number;
  row: number;
};
