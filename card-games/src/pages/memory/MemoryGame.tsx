import { Heading } from "@nn-design-system/react-component-library";
import { memo, useEffect, useState } from "react";
import { MemoryService } from "../../implementations/services/memoryService/memoryService";
import { MemoryCard } from "../../implementations/services/memoryService/memoryService.interface";
import Memorycard from "./components/Memorycard";
import { useStyles } from "./MemoryGame.style";
import {
  checkIfCardsMatch,
  setCardsAreFlippedToBack,
  setCardsAreMatched,
  updateDeck,
} from "./MemoryGame.utils";

export default function Memory(): JSX.Element {
  const classes = useStyles();
  const [deck, setDeck] = useState<MemoryCard[]>();
  const memoryService = new MemoryService();

  useEffect(() => {
    async function fetchCards() {
      const cards: MemoryCard[] = await memoryService.getNewGame();
      setDeck(cards);
      const cardCodesArray = cards.map((card) => card.code);
      console.log(cardCodesArray);
    }
    fetchCards();
  }, []);

  function handleCardClick(card: MemoryCard): void {
    if (deck) {
      card.isRightSideUp = true;
      setDeck(updateDeck([card], deck));
      const flippedCards = deck.filter(
        (card) => card.isRightSideUp === true && card.matched === false,
      );

      if (flippedCards.length === 2) {
        console.log("Check matched");
        if (checkIfCardsMatch(flippedCards)) {
          setDeck(setCardsAreMatched(flippedCards, deck));
        } else {
          setTimeout(() => {
            setDeck(setCardsAreFlippedToBack(flippedCards, deck));
          }, 500);
        }
      } else if (flippedCards.length > 2) {
        setDeck(setCardsAreFlippedToBack(flippedCards, deck));
      }
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
