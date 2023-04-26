import { DeckRepository } from "./deckRepository";

describe("get new deck", () => {
  it("should get a new complete deck", async () => {
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

  it("should create a partial deck with only aces", async () => {
    const deckRepo = new DeckRepository();
    const deck = await deckRepo.getPartialDeck(["0C", "0D", "0H", "0S"]);
    const cards = await deckRepo.drawCard(deck.deck_id, deck.remaining);

    expect(cards).toHaveLength(4);
    expect(cards).toContainObject({ code: "0C" });
    expect(cards).toContainObject({ code: "0D" });
    expect(cards).toContainObject({ code: "0H" });
    expect(cards).toContainObject({ code: "0S" });
  });

  it("should create a partial double deck with only aces", async () => {
    const deckRepo = new DeckRepository();
    const deck = await deckRepo.getPartialDeck(["0C", "0D", "0H", "0S"], 2);
    const cards = await deckRepo.drawCard(deck.deck_id, deck.remaining);

    expect(cards).toHaveLength(8);
  });
});

describe("draw card", () => {
  it("should draw a card with the correct format", async () => {
    const deckRepo = new DeckRepository();
    const deck = await deckRepo.getNewDeck();
    const cards = await deckRepo.drawCard(deck.deck_id, 1);

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
  });

  it("should draw two cards", async () => {
    const deckRepo = new DeckRepository();
    const deck = await deckRepo.getNewDeck();
    const cards = await deckRepo.drawCard(deck.deck_id, 2);

    expect(cards).toHaveLength(2);
  });
});
