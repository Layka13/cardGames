import { MemoryCard } from "./memoryService.interface";
import { DeckRepository } from "../../repository/deckRepository";
import { Icard } from "../../../interfaces/Icards";
import { Ideck } from "../../../interfaces/IDeck";
import { nanoid } from "nanoid";
import { getCardCodes } from "../sharedService";

export class MemoryService {
  readonly numberOfSuits = 4;
  readonly numberOfDecks = 2;
  public async getNewGame(difficulty: number): Promise<MemoryCard[]> {
    const cardCodes = getCardCodes(difficulty * this.numberOfSuits);

    const deckRepository = new DeckRepository();
    const deck: Ideck = await deckRepository.getPartialDeck(
      cardCodes,
      this.numberOfDecks,
    );
    const cards: Icard[] = await deckRepository.drawCard(
      deck.deck_id,
      deck.remaining,
    );

    return cards.map((card) => {
      return {
        id: nanoid(),
        code: card.code,
        image: card.image,
        matched: false,
        isRightSideUp: false,
      };
    });
  }
}
