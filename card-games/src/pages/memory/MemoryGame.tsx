import { Heading } from "@nn-design-system/react-component-library";
import { useState } from "react";
import GamePage from "./components/GamePage/GamePage";
import StartPage from "./components/Startpage/StartPage";
import { defaultDifficulty, memorySettings } from "./MemoryGame.interface";

export default function Memory(): JSX.Element {
  const [gameStarted, setGameStarted] = useState(false);

  const [memorySettings, setMemorySettings] = useState<memorySettings>({
    difficulty: defaultDifficulty,
  });

  return (
    <>
      <Heading variant="XXLCentered">Memory</Heading>
      {gameStarted ? (
        <GamePage memorySettings={memorySettings} />
      ) : (
        <StartPage
          setGameStarted={setGameStarted}
          memorySettings={memorySettings}
          setMemorySettings={setMemorySettings}
        />
      )}
    </>
  );
}
