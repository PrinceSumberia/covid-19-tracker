import colors from "../constants/colors";

export default {
  panel: {
    width: "15%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: (props) => (props.isDarkMode ? colors.darkPurple : "#fff"),
    marginBottom: "3.5rem",
    marginTop: "3.5rem",
    padding: "1.5rem 3rem",
    boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.05)",
    borderRadius: "2.5rem",
  },
  heading: {
    fontSize: "2rem",
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
    fontSize: "3.5rem",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
  },
  dataChange: {
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
