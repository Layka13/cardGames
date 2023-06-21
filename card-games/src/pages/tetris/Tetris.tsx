import { Heading } from "@nn-design-system/react-component-library";
import GameBoard from "./components/gameBoard/GameBoard";
import { GameState } from "./Tetris.types";
import { useEffect, useState } from "react";
import { initGameState, moveTetromino } from "./Tetris.utils";
import { moveDirections } from "./Tetris.constants";

export default function Tetris(): JSX.Element {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e);
      if (e.code === "ArrowLeft") {
        e.preventDefault();
        setGameState((old) => moveTetromino(old, moveDirections.left));
      }
      if (e.code === "ArrowRight") {
        setGameState((old) => moveTetromino(old, moveDirections.right));
      }
    };
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  });

  return (
    <>
      <Heading variant="XXLCentered">Tetris</Heading>
      <GameBoard gameState={gameState} />
    </>
  );
}
