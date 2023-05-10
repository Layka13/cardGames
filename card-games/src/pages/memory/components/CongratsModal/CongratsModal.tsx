import {
  Button,
  Heading,
  Modal,
} from "@nn-design-system/react-component-library";
import { useStyles } from "../../MemoryGame.style";

interface CongratsModelProps {
  isOpen: boolean;
  setGameStarted: Function;
}

export default function CongratsModal({
  isOpen,
  setGameStarted,
}: CongratsModelProps): JSX.Element {
  const classes = useStyles();

  const updateGameStarted = () => {
    setGameStarted(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={function noRefCheck() {}}
      variant="Elevated"
      height="175px"
    >
      <Heading variant="XXLCentered">YOU WON</Heading>

      <Button
        testId="button"
        variant="SecondaryLarge"
        onClick={updateGameStarted}
      >
        Start new game
      </Button>
    </Modal>
  );
}
