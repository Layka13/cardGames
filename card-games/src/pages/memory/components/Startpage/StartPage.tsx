import {
  Button,
  Heading,
  Label,
  Slider,
} from "@nn-design-system/react-component-library";
import { useStyles } from "../../MemoryGame.style";
import { defaultDifficulty, memorySettings } from "../../MemoryGame.interface";

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

  function setDifficulty(value: number) {
    setMemorySettings((old: memorySettings) => ({
      ...old,
      difficulty: value,
    }));
  }

  return (
    <div className={classes.startPage}>
      <Heading variant={"Large"}>Start new game</Heading>
      <Slider
        min={1}
        max={13}
        valueLabelDisplay="auto"
        mb="20px"
        defaultValue={defaultDifficulty}
        onChange={(e, range) => setDifficulty(range as number)}
      />
      <Button onClick={handleClick}>Start</Button>
    </div>
  );
}
