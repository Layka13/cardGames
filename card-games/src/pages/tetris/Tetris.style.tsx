import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  layout: {
    padding: "20px",
    justifyContent: "center",
    height: "80vh",
    gap: "20px",
    display: "flex",
  },
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  board: {
    border: "4px solid #6473ff",
    padding: "5px",
    width: "calc(100vh / 20 * 10)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flex: 1,
  },
  cell: {
    textAlign: "center",
    flex: 1,
    border: "1px solid black",
  },
});
