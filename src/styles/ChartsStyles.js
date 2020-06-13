import sizes from './sizes';

export default {
  charts: {
    width: "50%",
    height: "35rem",
    marginTop: "5rem",

    [sizes.down("md")]: {
      marginTop: "2.5rem",
      width: "100%",
      height: "30rem",
    },
    [sizes.down("xs")]: {
      marginTop: "rem",
      height: "rem",
    },
  },

  barcharts: {
    marginTop: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}