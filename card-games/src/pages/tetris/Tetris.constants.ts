import { Position, Tetromino } from "./Tetris.types";

export enum moveDirections {
  down,
  left,
  right,
}

export const INITIAl_TETROMINO_POSITIONS = {
  I: [
    { row: 1, col: 3 },
    { row: 1, col: 4 },
    { row: 1, col: 5 },
    { row: 1, col: 6 },
  ] as Position,
  O: [
    { row: 0, col: 4 },
    { row: 0, col: 5 },
    { row: 1, col: 4 },
    { row: 1, col: 5 },
  ] as Position,
  T: [
    { row: 0, col: 4 },
    { row: 1, col: 3 },
    { row: 1, col: 4 },
    { row: 1, col: 5 },
  ] as Position,
  S: [
    { row: 0, col: 4 },
    { row: 0, col: 5 },
    { row: 1, col: 3 },
    { row: 1, col: 4 },
  ] as Position,
  Z: [
    { row: 0, col: 3 },
    { row: 0, col: 4 },
    { row: 1, col: 4 },
    { row: 1, col: 5 },
  ] as Position,
  J: [
    { row: 0, col: 3 },
    { row: 1, col: 3 },
    { row: 1, col: 4 },
    { row: 1, col: 5 },
  ] as Position,
  L: [
    { row: 0, col: 5 },
    { row: 1, col: 3 },
    { row: 1, col: 4 },
    { row: 1, col: 5 },
  ] as Position,
};

export const tetrominos: Tetromino[] = [
  {
    type: "I",
    currentPosition: INITIAl_TETROMINO_POSITIONS.I,
    initialPosition: INITIAl_TETROMINO_POSITIONS.I,
    color: "#0BFBFD",
  },
  {
    type: "O",
    currentPosition: INITIAl_TETROMINO_POSITIONS.O,
    initialPosition: INITIAl_TETROMINO_POSITIONS.O,
    color: "#FFFF54",
  },
  {
    type: "T",
    currentPosition: INITIAl_TETROMINO_POSITIONS.T,
    initialPosition: INITIAl_TETROMINO_POSITIONS.T,
    color: "#8C1AF5",
  },
  {
    type: "S",
    currentPosition: INITIAl_TETROMINO_POSITIONS.S,
    initialPosition: INITIAl_TETROMINO_POSITIONS.S,
    color: "#75FB4C",
  },
  {
    type: "Z",
    currentPosition: INITIAl_TETROMINO_POSITIONS.Z,
    initialPosition: INITIAl_TETROMINO_POSITIONS.Z,
    color: "#EA3323",
  },
  {
    type: "J",
    currentPosition: INITIAl_TETROMINO_POSITIONS.J,
    initialPosition: INITIAl_TETROMINO_POSITIONS.J,
    color: "#0000FF",
  },
  {
    type: "L",
    currentPosition: INITIAl_TETROMINO_POSITIONS.L,
    initialPosition: INITIAl_TETROMINO_POSITIONS.L,
    color: "#F3AE3D",
  },
];
