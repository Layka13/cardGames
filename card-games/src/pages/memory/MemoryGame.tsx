import { Heading } from "@nn-design-system/react-component-library";
import { useState } from "react";
import GamePage from "./components/GamePage/GamePage";
import StartPage from "./components/Startpage/StartPage";

export default function Memory(): JSX.Element {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <>
      <Heading variant="XXLCentered">Memory</Heading>
      {gameStarted ? (
        <GamePage />
      ) : (
        <StartPage setGameStarted={setGameStarted} />
      )}
    </>
  );
}
