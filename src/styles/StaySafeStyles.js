import sizes from "./sizes";

export default {
  staySafe: {
    textAlign: "center",

    "& h1": {
      marginBottom: "4.5rem",

      [sizes.down("lg")]: {
        margin: "4rem 0",
      },

      [sizes.down("md")]: {
        margin: "2.5rem 0",
      },
    },
  },
  cardsBox: {
    display: "flex",
    flexWrap: "wrap",
    padding: "2rem",
    justifyContent: "space-around",
    alignItems: "stretch",

    [sizes.down("sm")]: {
      padding: "0",
    },
  },
};
