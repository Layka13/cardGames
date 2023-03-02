import { Card } from "@nn-design-system/react-component-library";
import { MemoryCard as IMemoryCard } from "../../../../implementations/services/memoryService/memoryService.interface";
import { useStyles } from "../../MemoryGame.style";
import { backImage } from "../../MemoryGame.constants";

interface MemoryCardProps {
  card: IMemoryCard;
}

export default function MemoryCard({ card }: MemoryCardProps): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.playingCard}>
      <Card>
        <img
          className={card.isRightSideUp ? classes.playingCardImage : backImage}
          src={card.image}
          alt={card.code}
        />
      </Card>
    </div>
  );
}
