import { MemoryCard } from "../../implementations/services/memoryService/memoryService.interface";

function checkIfCardsMatch(cards: MemoryCard[]): boolean {
  return cards[0].code === cards[1].code;
}

function updateDeck(cards: MemoryCard[], deck: MemoryCard[]): MemoryCard[] {
  const newDeck = deck.slice();
  cards.forEach((card) => {
    const index = deck.findIndex((c) => card.id === c.id);
    newDeck[index] = card;
  });
  return newDeck;
}

function setCardsAreMatched(
  cards: MemoryCard[],
  deck: MemoryCard[],
): MemoryCard[] {
  const matchedCards = cards.map((card) => {
    card.matched = true;
    return card;
  });
  return updateDeck(matchedCards, deck);
}

function setCardsAreFlippedToBack(
  cards: MemoryCard[],
  deck: MemoryCard[],
): MemoryCard[] {
  const matchedCards = cards.map((card) => {
    card.isRightSideUp = false;
    return card;
  });
  return updateDeck(matchedCards, deck);
}

export {
  checkIfCardsMatch,
  updateDeck,
  setCardsAreMatched,
  setCardsAreFlippedToBack,
};
