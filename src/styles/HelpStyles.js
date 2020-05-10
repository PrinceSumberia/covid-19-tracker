import sizes from "./sizes";

export default {
  help: {
    textAlign: "center",
  },

  mainHeading: {
    marginBottom: "2rem",
  },

  container: {
    marginTop: "3rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  card: {
    boxShadow: "0 1.5rem 3.5rem rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    borderRadius: "1rem",
    padding: "3.5rem",
    width: "25%",
    display: "flex",
    margin: "2rem 0",
    flexDirection: "column",
    textAlign: "left",

    [sizes.down("md")]: {
      padding: "2rem",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",

    [sizes.down("md")]: {
      marginBottom: "1.5rem",
    },
  },

  content: {},

  cardHeading: {
    textTransform: "uppercase",
    display: "inline-block",
  },

  text: {
    fontSize: "1.5rem",
    "&:not(:last-child)": {
      marginBottom: ".5rem",
    },
  },

  icons: {
    transition: "all .2s",
    "&:hover": {
      color: "#000",
      transform: "scale(1.02)",
    },
  },

  cardLink: {
    "&, &:visited": {
      color: "#6236FF",
    },
  },
};
