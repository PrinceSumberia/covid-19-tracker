import sizes from "./sizes";

export default {
  root: {
    textAlign: "center",
  },
  panels: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    [sizes.down("sm")]: {
      flexWrap: "wrap",
      padding: "0 1rem",
    },
  },
  panelContainer: {
    width: "20%",
    [sizes.down("sm")]: {
      width: "40%",
    },
  },
};
