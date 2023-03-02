import { Card } from "@nn-design-system/react-component-library";
import { MemoryCard as IMemoryCard } from "../../../../implementations/services/memoryService/memoryService.interface";
import { useStyles } from "../../MemoryGame.style";
import { backImage } from "../../MemoryGame.constants";

interface MemoryCardProps {
  card: IMemoryCard;
  onClick: Function;
}

export default function MemoryCard({
  card,
  onClick,
}: MemoryCardProps): JSX.Element {
  const classes = useStyles();
  return (
    <div
      className={classes.playingCard}
      onClick={() => {
        console.log(card);
        onClick(card.id);
      }}
    >
      <Card>
        <img
          className={classes.playingCardImage}
          src={card.isRightSideUp ? card.image : backImage}
          alt={card.code}
        />
      </Card>
    </div>
  );
}
