import { Card, Heading } from "@nn-design-system/react-component-library";
import { MemoryCard as IMemoryCard } from "../../../../implementations/services/memoryService/memoryService.interface";
import { Icard } from "../../../../interfaces/Icards";

interface MemoryCardProps {
  card: IMemoryCard;
}

export default function MemoryCard({ card }: MemoryCardProps): JSX.Element {
  return (
    <div>
      <Card>
        <Heading variant="Default">{card.code}</Heading>
      </Card>
    </div>
  );
}
