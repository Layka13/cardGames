import { MemoryCard } from "../../implementations/services/memoryService/memoryService.interface";

function cardsMatch(cards: MemoryCard[]): boolean {
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

function setCardsMatched(
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

function flipCardToFront(card: MemoryCard, deck: MemoryCard[]): MemoryCard[] {
  card.isRightSideUp = true;
  return updateDeck([card], deck);
}

function flipOpenCardsToBack(deck: MemoryCard[]): MemoryCard[] {
  const unmatchedCards = filterUnmatchedCards(deck);
  const closedCards = unmatchedCards.map((card) => {
    card.isRightSideUp = false;
    return card;
  });
  return updateDeck(closedCards, deck);
}

function filterFlippedCards(deck: MemoryCard[]): MemoryCard[] {
  return deck.filter(
    (card) => card.isRightSideUp === true && card.matched === false,
  );
}

function filterUnmatchedCards(deck: MemoryCard[]): MemoryCard[] {
  return deck.filter((card) => card.matched === false);
}

export {
  cardsMatch,
  setCardsMatched,
  setCardsAreFlippedToBack,
  filterFlippedCards,
  flipCardToFront,
  flipOpenCardsToBack,
};
