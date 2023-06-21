import { Button, Heading } from "@nn-design-system/react-component-library";
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
  gameIsWon,
} from "../../MemoryGame.utils";
import Memorycard from "../Memorycard";
import { memorySettings } from "../../MemoryGame.interface";
import CongratsModal from "../CongratsModal";

interface GamePageProps {
  memorySettings: memorySettings;
  setGameStarted: Function;
}

export default function GamePage({
  memorySettings,
  setGameStarted,
}: GamePageProps): JSX.Element {
  const classes = useStyles();
  const [deck, setDeck] = useState<MemoryCard[]>();
  const [congratsModalIsOpen, setCongratsModalIsOpen] = useState(false);

  useEffect(() => {
    const memoryService = new MemoryService();
    async function fetchCards() {
      setDeck(await memoryService.getNewGame(memorySettings));
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
      if (gameIsWon(deck)) {
        setCongratsModalIsOpen(true);
      }
    }
  }

  const updateGameStarted = () => {
    setGameStarted(false);
  };

  return (
    <>
      <CongratsModal
        isOpen={congratsModalIsOpen}
        setGameStarted={setGameStarted}
      />
      <Button
        testId="button"
        variant="Secondary"
        onClick={updateGameStarted}
        ml="20px"
        mb="20px"
      >
        I give up
      </Button>
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
