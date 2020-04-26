import colors from "../constants/colors";

export default {
  panel: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3.5rem",
    marginTop: "3.5rem",
    // boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.05)",
    backgroundColor: (props) => (props.isDarkMode ? colors.darkPurple : "#fff"),
    margin: (props) => (props.isMiniPanel ? "3rem 1rem" : "3.5rem 0"),
    padding: (props) => (props.isMiniPanel ? "1.5rem 1.5rem" : "1.5rem 3rem"),
    borderRadius: (props) => (props.isMiniPanel ? "2rem" : "2.5rem"),

    boxShadow: (props) => {
      if (props.isMiniPanel) {
        return null;
      }
      return "0 1.5rem 3rem rgba(0, 0, 0, 0.1)";
      // let color;
      // let title = props.title.toLowerCase();
      // if (title === "recovered") {
      //   color = "rgb(28, 177, 66,.2)";
      // } else if (title === "deceased") {
      //   color = "rgb(98, 54, 25,.2)";
      // } else if (title === "active") {
      //   color = "rgb(250, 100, 0,.2)";
      // } else if (title === "confirmed") {
      //   color = "rgb(249, 52, 94,.2)";
      // }
      // return `0 .5rem 3rem ${color}`;
    },
  },

  heading: {
    fontSize: (props) => (props.isMiniPanel ? "1.5rem" : "2rem"),
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
