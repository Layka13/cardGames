import { Heading } from "@nn-design-system/react-component-library";
import { useStyles } from "../../MemoryGame.style";
import { MemoryCard } from "../../../../implementations/services/memoryService/memoryService.interface";
import { useEffect, useState } from "react";
import { MemoryService } from "../../../../implementations/services/memoryService/memoryService";
import {
  cardsMatch,
  filterOpenCards,
  openCard,
  closeOpenCards,
  setCardsMatched,
} from "../../MemoryGame.utils";
import Memorycard from "../Memorycard";
import { memorySettings } from "../../MemoryGame.interface";

interface GamePageProps {
  memorySettings: memorySettings;
}

export default function GamePage({
  memorySettings,
}: GamePageProps): JSX.Element {
  const classes = useStyles();
  const [deck, setDeck] = useState<MemoryCard[]>();

  useEffect(() => {
    const memoryService = new MemoryService();
    async function fetchCards() {
      setDeck(await memoryService.getNewGame(memorySettings.difficulty));
    }
    fetchCards();
  }, [memorySettings]);

  function handleCardClick(card: MemoryCard): void {
    if (deck) {
      const flippedCards = filterOpenCards(deck);
      if (flippedCards.length >= 2) {
        if (cardsMatch(flippedCards)) {
          setDeck(setCardsMatched(flippedCards, deck));
        }
        setDeck(closeOpenCards(deck));
      }

      setDeck(openCard(card, deck));
    }
  }

  return (
    <>
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
