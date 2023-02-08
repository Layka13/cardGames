import {
  Button,
  Card,
  Heading,
} from "@nn-design-system/react-component-library";
import { useState } from "react";
import { Ideck } from "../../../interfaces/Icards";
import { useStyles } from "./deck.style";

function Deck(): JSX.Element {
  const classes = useStyles();
  const [deck, setDeck] = useState<Ideck>();
  const subText =
    deck === undefined ? "No stack found" : `${deck.remaining} cards remaining`;
  const buttonText = deck === undefined ? "Shuffle stack" : "Reset stack";
  const handleGetStack = () => {
    console.log("New stack");
  };

  return (
    <div className={classes.wrapper}>
      <Card>
        <Heading variant="Large">Current Stack</Heading>
        <Heading variant="Medium">{subText}</Heading>
        <Button onClick={handleGetStack}>{buttonText}</Button>
      </Card>
    </div>
  );
}

export default Deck;
