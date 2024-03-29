import { Card } from "@nn-design-system/react-component-library";
import { MemoryCard as IMemoryCard } from "../../../../implementations/services/memoryService/memoryService.interface";
import { useStyles } from "../../MemoryGame.style";
import { backImage } from "../../../../interfaces/Icards";

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
        onClick(card);
      }}
    >
      <Card>
        <img
          className={
            card.matched ? classes.playingCardMatched : classes.playingCardImage
          }
          src={card.isRightSideUp ? card.image : backImage}
          alt={card.code}
        />
      </Card>
    </div>
  );
}
