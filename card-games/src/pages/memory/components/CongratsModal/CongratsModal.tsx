import { Heading, Modal } from "@nn-design-system/react-component-library";
import { useStyles } from "../../MemoryGame.style";

interface CongratsModelProps {
  isOpen: boolean;
}

export default function CongratsModal({
  isOpen,
}: CongratsModelProps): JSX.Element {
  const classes = useStyles();

  return (
    <Modal
      isOpen={isOpen}
      onClose={function noRefCheck() {}}
      variant="Elevated"
      height="150px"
    >
      <Heading variant="XXLCentered">YOU WON</Heading>
    </Modal>
  );
}
