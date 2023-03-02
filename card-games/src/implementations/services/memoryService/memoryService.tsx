import { MemoryCard } from "./memoryService.interface";
import { DeckRepository } from "../../repository/deckRepository";
import { Icard, Ideck } from "../../../interfaces/Icards";
import { nanoid } from "nanoid";

export class MemoryService {
  public async getNewGame(): Promise<MemoryCard[]> {
    const deckRepository = new DeckRepository();
    const deck: Ideck = await deckRepository.getNewDeck(2);
    const cards: Icard[] = await deckRepository.drawCard(deck.deck_id, 104);
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
