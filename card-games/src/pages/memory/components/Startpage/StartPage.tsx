import { Button, Heading } from "@nn-design-system/react-component-library";
import { useStyles } from "../../MemoryGame.style";

interface StartPageProps {
  setGameStarted: Function;
}

export default function StartPage({
  setGameStarted,
}: StartPageProps): JSX.Element {
  const classes = useStyles();

  function handleClick() {
    setGameStarted(true);
  }

  return (
    <>
      <Heading variant={"Large"}>Start new game</Heading>;
      <Button onClick={handleClick}>Start</Button>
    </>
  );
}
