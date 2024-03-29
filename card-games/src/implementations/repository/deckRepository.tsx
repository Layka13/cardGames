import { DeckResponse } from "../../interfaces/IDeck";
import { http } from "../utils";
// import fetch from "node-fetch";

export class DeckRepository {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {}

  public async getNewDeck(deckCount?: number): Promise<any> {
    if (!deckCount) {
      deckCount = 1;
    }
    try {
      const data = await http<DeckResponse>(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckCount}`,
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async getPartialDeck(
    cardCodes: string[],
    deckCount?: number,
  ): Promise<any> {
    const cardsString = cardCodes.join(",");

    const queryString = `cards=${cardsString}${
      deckCount ? `&deck_count=${deckCount}` : ""
    }`;

    console.log(queryString);

    try {
      const data = await http<DeckResponse>(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?${queryString}`,
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async drawCard(deckId: string, amount?: number): Promise<any> {
    if (!amount) amount = 1;

    try {
      const data = await http<DeckResponse>(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${amount}`,
      );
      return data.cards;
    } catch (error) {
      console.log(error);
    }
  }
}
