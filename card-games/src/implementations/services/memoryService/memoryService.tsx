import { MemoryCard } from "./memoryService.interface";
import { DeckRepository } from "../../repository/deckRepository";
import { Icard } from "../../../interfaces/Icards";
import { Ideck } from "../../../interfaces/IDeck";
import { nanoid } from "nanoid";
import { getCardValues, getSelectedCards } from "../sharedService";
import { memorySettings } from "../../../pages/memory/MemoryGame.interface";

export class MemoryService {
  readonly numberOfDecks = 2;
  public async getNewGame(
    memorySettings: memorySettings,
  ): Promise<MemoryCard[]> {
    const cardCodes = getSelectedCards(
      getCardValues(memorySettings.numberOfCards),
      memorySettings.suits,
    );

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
