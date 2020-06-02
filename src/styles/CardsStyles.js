import sizes from "./sizes";
import colors from "../constants/colors";

export default {
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "0 0 20%",
    padding: "3rem 4rem",
    backgroundColor: ({ isDarkMode }) =>
      isDarkMode ? colors.darkPurple : "#fff",
    marginBottom: "7rem",
    transition: "all .5s",
    boxShadow: `0 1px 2.3px -50px rgba(0, 0, 0, 0.014),
  0 2.3px 5.6px -50px rgba(0, 0, 0, 0.02),
  0 4.4px 10.5px -50px rgba(0, 0, 0, 0.025),
  0 7.8px 18.8px -50px rgba(0, 0, 0, 0.03),
  0 14.6px 35.1px -50px rgba(0, 0, 0, 0.036),
  0 35px 84px -50px rgba(0, 0, 0, 0.05)`,

    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  cardTitle: {
    textTransform: "capitalize",

    [sizes.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
  cardImage: {
    display: "block",
    backgroundSize: "cover",
  },
};
