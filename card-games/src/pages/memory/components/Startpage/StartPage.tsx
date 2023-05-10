import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Heading,
  Paragraph,
  Slider,
} from "@nn-design-system/react-component-library";
import { useStyles } from "../../MemoryGame.style";
import {
  defaultNumberOfCards,
  memorySettings,
} from "../../MemoryGame.interface";
import { SUITS } from "../../../../interfaces/Icards";

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

  function setSuits(selectedValues: string[]) {
    setMemorySettings((old: memorySettings) => ({
      ...old,
      suits: selectedValues,
    }));
  }

  function setNumberOfCards(value: number) {
    console.log("in setNumberOfCards", value);

    setMemorySettings((old: memorySettings) => ({
      ...old,
      numberOfCards: value,
    }));
  }
  return (
    <div className={classes.startPage}>
      <Heading variant={"Large"}>Start new game</Heading>

      <Card mb="5px">
        <CheckboxGroup
          labelText="Select suits"
          onChange={(value) => setSuits(value)}
          value={memorySettings.suits}
          variant="Default"
        >
          <Checkbox labelText="Hearts" value={SUITS.HEARTS} />
          <Checkbox labelText="Spades" value={SUITS.SPADES} />
          <Checkbox labelText="Clubs" value={SUITS.CLUBS} />
          <Checkbox labelText="Diamonds" value={SUITS.DIAMONDS} />
        </CheckboxGroup>

        <Paragraph mb="10px">Number of cards per suit</Paragraph>
        <Slider
          defaultValue={defaultNumberOfCards}
          value={memorySettings.numberOfCards}
          valueLabelDisplay="auto"
          min={1}
          max={13}
          onChange={(e, range) => setNumberOfCards(range as number)}
        />
      </Card>

      <Button onClick={handleClick} mt="20px">
        Start
      </Button>
    </div>
  );
}
