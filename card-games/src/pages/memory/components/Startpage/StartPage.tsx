import { Button, Heading } from "@nn-design-system/react-component-library";
import { useStyles } from "../../MemoryGame.style";
import { memorySettings } from "../../MemoryGame.interface";

interface StartPageProps {
  setGameStarted: Function;
  memorySettings: memorySettings;
  setMemorySettings: Function;
}

export default function StartPage({
  setGameStarted,
  memorySettings,
  setMemorySettings,
}: StartPageProps): JSX.Element {
  const classes = useStyles();

  function handleClick() {
    setGameStarted(true);
  }

  function setDifficulty() {
    setMemorySettings((old: memorySettings) => ({
      ...old,
      difficulty: 2,
    }));
  }

  return (
    <div className={classes.startPage}>
      <Heading variant={"Large"}>Start new game</Heading>
      <Button onClick={handleClick}>Start</Button>
    </div>
  );
}
