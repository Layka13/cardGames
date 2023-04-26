import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  playingCard: {
    padding: "0",
  },
  playingCardImage: {
    maxWidth: "100px",
    heigth: "auto",
    userDrag: "none",
    webkitUserDrag: "none",
    userSelect: "none",
    mozUserSelect: "none",
    webkitUserSelect: "none",
    msUserSelect: "none",
  },
  playingCardMatched: {
    opacity: "0.5",
    maxWidth: "100px",
    heigth: "auto",
    userDrag: "none",
    webkitUserDrag: "none",
    userSelect: "none",
    mozUserSelect: "none",
    webkitUserSelect: "none",
    msUserSelect: "none",
  },
  startPage: {
    display: "grid",
    justifyContent: "center",
  },
});
