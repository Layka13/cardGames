import { Card, Heading } from "@nn-design-system/react-component-library";
import { MemoryCard as IMemoryCard } from "../../../../implementations/services/memoryService/memoryService.interface";
import { Icard } from "../../../../interfaces/Icards";

export default function MemoryCard(card: IMemoryCard): JSX.Element {
  return (
    <div>
      <Card>
        <Heading variant="default">{card.code}</Heading>
      </Card>
    </div>
  );
}
