import { DeckRepository } from "./deckRepository";

describe("get new deck", () => {
  it("should get a new deck", async () => {
    const deckRepo = new DeckRepository();
    const deck = await deckRepo.getNewDeck();
    expect(deck).toEqual({
      deck_id: expect.any(String),
      success: true,
      remaining: 52,
      shuffled: true,
    });
  });

  it("should get a new double deck", async () => {
    const deckRepo = new DeckRepository();
    const deck = await deckRepo.getNewDeck(2);
    expect(deck).toEqual({
      deck_id: expect.any(String),
      success: true,
      remaining: 104,
      shuffled: true,
    });
  });
});

describe("draw card", () => {
  it("should draw two cards", async () => {
    const deckRepo = new DeckRepository();
    const deck = await deckRepo.getNewDeck();
    const cards = await deckRepo.drawCard(deck.deck_id, 2);

    console.log(cards);
    expect(cards[0]).toEqual({
      code: expect.any(String),
      image: expect.any(String),
      images: {
        svg: expect.any(String),
        png: expect.any(String),
      },
      value: expect.any(String),
      suit: expect.any(String),
    });
    expect(cards).toHaveLength(2);
  });
});
