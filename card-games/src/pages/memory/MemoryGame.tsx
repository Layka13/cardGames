import { Heading } from "@nn-design-system/react-component-library";
import { useEffect, useState } from "react";
import { MemoryService } from "../../implementations/services/memoryService/memoryService";
import { MemoryCard } from "../../implementations/services/memoryService/memoryService.interface";
import Memorycard from "./components/Memorycard";

export default function Memory(): JSX.Element {
  const [deck, setDeck] = useState<MemoryCard[]>();
  const memoryService = new MemoryService();

  useEffect(() => {
    async function fetchCards() {
      const cards: MemoryCard[] = await memoryService.getNewGame();
      setDeck(cards);
    }
    fetchCards();
  }, []);

  return (
    <div>
      {deck ? (
        <div>
          {deck.map((card) => {
            <Memorycard card={card} />;
          })}
        </div>
      ) : (
        <Heading variant="Large">"...Loading"</Heading>
      )}{" "}
    </div>
  );
}
