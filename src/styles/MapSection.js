import sizes from "./sizes";

export default {
  mainContainer: {
    backgroundColor: "rgba(129, 124, 155, 0.05)",
    padding: "7rem 3rem",
    textAlign: "center",

    [sizes.down("md")]: {
      padding: "5rem 2rem",
    },

    [sizes.down("sm")]: {
      padding: "2.5rem 1.5rem",
    },
  },

  heading: {
    fontSize: "2.5rem",
    [sizes.down("md")]: {
      fontSize: "2rem",
    },

    [sizes.down("sm")]: {
      fontSize: "1.7rem",
    },
  },
  para: {
    marginBottom: "3rem",
    color: "#bbb",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [sizes.down("md")]: {
      flexDirection: "column",
    },
  },

  mapContainer: {
    flex: "1",
    width: "100%",
  },

  panelsContainer: {
    display: "flex",
    flex: "0 0 30%",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",

    [sizes.down("md")]: {
      order: "1",
      width: "100%",
      flex: "0 0 1",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  singlePanel: {
    width: "50%",
    [sizes.down("md")]: {
      width: "25%",
      // order: "1",
    },
  },
};
