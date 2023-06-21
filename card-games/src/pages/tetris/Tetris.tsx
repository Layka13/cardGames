import { Heading } from "@nn-design-system/react-component-library";
import GameBoard from "./components/gameBoard/GameBoard";
import { GameState, Tetromino } from "./Tetris.types";
import { Board, BoardRow } from "./components/gameBoard/GameBoard.types";
import { useEffect, useState } from "react";
import { moveTetromino } from "./Tetris.utils";
import { moveDirections } from "./Tetris.constants";

export default function Tetris(): JSX.Element {
  const initGameState = (): GameState => {
    const rows = Array(20).fill(null);
    const columns = Array(10).fill(null);
    const board = rows.map(
      () => columns.map(() => ({ color: "" })) as BoardRow,
    ) as Board;

    const firstTetromino: Tetromino = {
      currentPosition: [
        { row: 0, col: 4 },
        { row: 0, col: 5 },
        { row: 1, col: 4 },
        { row: 1, col: 5 },
      ],
      initialPosition: [
        { row: 0, col: 4 },
        { row: 0, col: 5 },
        { row: 1, col: 4 },
        { row: 1, col: 5 },
      ],
    };
    return {
      gameStarted: false,
      board,
      currentTetromino: firstTetromino,
    };
  };

  const [gameState, setGameState] = useState<GameState>(initGameState());

  const startGame = (): void => {
    setGameState({
      ...gameState,
      gameStarted: true,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGameState((old) => moveTetromino(old, moveDirections.down));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    startGame();
  }, []);

  return (
    <>
      <Heading variant="XXLCentered">Tetris</Heading>
      <GameBoard gameState={gameState} />
    </>
  );
}
