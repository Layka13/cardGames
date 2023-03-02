import { Heading } from "@nn-design-system/react-component-library";
import { useEffect, useState } from "react";
import { MemoryService } from "../../implementations/services/memoryService/memoryService";
import { MemoryCard } from "../../implementations/services/memoryService/memoryService.interface";
import Memorycard from "./components/Memorycard";
import { useStyles } from "./MemoryGame.style";

export default function Memory(): JSX.Element {
  const classes = useStyles();
  const [deck, setDeck] = useState<MemoryCard[]>();

  useEffect(() => {
    const memoryService = new MemoryService();

    async function fetchCards() {
      const cards: MemoryCard[] = await memoryService.getNewGame();
      setDeck(cards);
    }

    fetchCards();
  }, []);

  return (
    <>
      <Heading variant="XXLCentered">Memory</Heading>
      <div className={classes.cardGrid}>
        {deck ? (
          <div className={classes.cardGrid}>
            {deck.map((card) => {
              return <Memorycard card={card} />;
            })}
          </div>
        ) : (
          <Heading variant="Large">"...Loading"</Heading>
        )}
      </div>
    </>
  );
}
