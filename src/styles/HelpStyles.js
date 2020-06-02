import sizes from "./sizes";
import colors from "../constants/colors";

export default {
  help: {
    textAlign: "center",
    minHeight: "100vh",
  },

  mainHeading: {
    marginBottom: "2rem",

    [sizes.down("md")]: {
      margin: "2rem",
    },
    [sizes.down("sm")]: {
      fontSize: "2rem",
    },
  },

  container: {
    marginTop: "3rem",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },

  card: {
    boxShadow: "0 1.5rem 3.5rem rgba(0,0,0,0.1)",
    backgroundColor: ({ isDarkMode }) =>
      isDarkMode ? colors.darkPurple : "#fff",
    borderRadius: "1rem",
    padding: "3.5rem",
    width: "20%",
    display: "flex",
    margin: "2rem 1rem",
    flexDirection: "column",
    textAlign: "left",

    [sizes.down("sm")]: {
      padding: "2rem",
      margin: "1rem",
      width: "30%",
    },

    [sizes.down("xs")]: {
      padding: "2rem",
      margin: "1rem",
      width: "50%",
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
