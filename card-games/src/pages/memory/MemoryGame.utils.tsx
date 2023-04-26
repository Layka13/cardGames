import { MemoryCard } from "../../implementations/services/memoryService/memoryService.interface";

function cardsMatch(cards: MemoryCard[]): boolean {
  if (cards.length > 2) {
    return false;
  }
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

function openCard(card: MemoryCard, deck: MemoryCard[]): MemoryCard[] {
  card.isRightSideUp = true;
  return updateDeck([card], deck);
}

function closeOpenCards(deck: MemoryCard[]): MemoryCard[] {
  const unmatchedCards = filterUnmatchedCards(deck);
  const closedCards = unmatchedCards.map((card) => {
    card.isRightSideUp = false;
    return card;
  });
  return updateDeck(closedCards, deck);
}

function filterOpenCards(deck: MemoryCard[]): MemoryCard[] {
  return deck.filter(
    (card) => card.isRightSideUp === true && card.matched === false,
  );
}

function filterUnmatchedCards(deck: MemoryCard[]): MemoryCard[] {
  return deck.filter((card) => card.matched === false);
}

function gameIsWon(deck: MemoryCard[]): boolean {
  if (
    filterUnmatchedCards(deck).length > 2 ||
    filterOpenCards(deck).length !== 2
  ) {
    return false;
  }
  return true;
}

export {
  cardsMatch,
  setCardsMatched,
  filterOpenCards,
  openCard,
  closeOpenCards,
  gameIsWon,
  filterUnmatchedCards,
};
