import { useState } from "react";
import { MemoryCard } from "../../implementations/services/memoryService/memoryService.interface";

function Memory(): JSX.Element {
  const [deck, setDeck] = useState<MemoryCard[]>();

  return <div>Memory</div>;
}
