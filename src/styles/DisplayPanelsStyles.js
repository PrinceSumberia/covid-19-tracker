import colors from "../constants/colors";
import sizes from "./sizes";

export default {
  panel: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3.5rem",
    marginTop: "3.5rem",
    backgroundColor: (props) => (props.isDarkMode ? colors.darkPurple : "#fff"),
    margin: (props) => (props.isMiniPanel ? "3rem 1rem" : "3.5rem 0"),
    padding: (props) => (props.isMiniPanel ? "1.5rem 1.5rem" : "1.5rem 3rem"),
    borderRadius: (props) => (props.isMiniPanel ? "2rem" : "2.5rem"),

    boxShadow: (props) => {
      if (props.isMiniPanel) {
        return null;
      }
      return "0 1.5rem 3rem rgba(0, 0, 0, 0.1)";
    },

    [sizes.down("lg")]: {
      marginBottom: ".5rem",
      marginTop: "2.5rem",
    },
  },

  heading: {
    fontSize: (props) => (props.isMiniPanel ? "1.5rem" : "2rem"),
    [sizes.down("lg")]: {
      fontSize: (props) => (props.isMiniPanel ? "1.2rem" : "1.7rem"),
    },
  },

  number: {
    color: (props) => {
      let color;
      let title = props.title.toLowerCase();
      if (title === "recovered") {
        color = colors.green;
      } else if (title === "deceased") {
        color = colors.purple;
      } else if (title === "active") {
        color = colors.orange;
      } else if (title === "confirmed") {
        color = colors.red;
      }
      return color;
    },
    fontSize: (props) => (props.isMiniPanel ? "2.2rem" : "3.5rem"),
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    [sizes.down("lg")]: {
      fontSize: (props) => (props.isMiniPanel ? "1.5rem" : "3rem"),
    },
  },

  dataChange: {
    fontSize: (props) => (props.isMiniPanel ? "1.4rem" : "inherit"),
    color: (props) => {
      let color;
      let title = props.title.toLowerCase();
      if (title === "recovered") {
        color = colors.green;
      } else if (title === "deceased") {
        color = colors.purple;
      } else if (title === "active") {
        color = colors.orange;
      } else if (title === "confirmed") {
        color = colors.red;
      }
      return color;
    },
  },
};
