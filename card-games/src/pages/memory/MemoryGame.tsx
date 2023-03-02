import { Heading } from "@nn-design-system/react-component-library";
import { useEffect, useState } from "react";
import { MemoryService } from "../../implementations/services/memoryService/memoryService";
import { MemoryCard } from "../../implementations/services/memoryService/memoryService.interface";
import Memorycard from "./components/Memorycard";
import { useStyles } from "./MemoryGame.style";

export default function Memory(): JSX.Element {
  const classes = useStyles();
  const [deck, setDeck] = useState<MemoryCard[]>();
  const memoryService = new MemoryService();

  useEffect(() => {
    async function fetchCards() {
      const cards: MemoryCard[] = await memoryService.getNewGame();
      setDeck(cards);
    }
    fetchCards();
  }, []);

  function handleCardClick(id: string): void {
    if (deck) {
      const selectedId = deck?.findIndex((card) => card.id === id);
      const newDeck = deck.slice();

      newDeck[selectedId].isRightSideUp = !deck[selectedId].isRightSideUp;
      setDeck(newDeck);
    }
  }

  return (
    <>
      <Heading variant="XXLCentered">Memory</Heading>
      <div className={classes.cardGrid}>
        {deck ? (
          <div className={classes.cardGrid}>
            {deck.map((card) => {
              return <Memorycard card={card} onClick={handleCardClick} />;
            })}
          </div>
        ) : (
          <Heading variant="Large">"...Loading"</Heading>
        )}
      </div>
    </>
  );
}
