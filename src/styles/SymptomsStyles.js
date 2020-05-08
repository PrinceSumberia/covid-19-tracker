import sizes from "./sizes";

export default {
  symptoms: {
    padding: ".2rem 1rem",

    [sizes.down("md")]: {
      marginTop: "1.5rem",
      padding: "1.5rem",
    },
  },

  content: {
    padding: "1rem",
    display: "flex",

    [sizes.down("lg")]: {
      flexDirection: "column",
    },
  },

  mainContent: {
    padding: "4rem",
    flex: "0 0 1",
    border: "1px solid #ccc",
    borderRadius: "1rem",
    marginRight: "2rem",

    [sizes.down("md")]: {
      border: "0",
      padding: "1rem",
    },
  },

  sidebar: {
    padding: ".5rem 1rem",
    flex: "0 0 30%",

    [sizes.down("lg")]: {
      padding: "1.5rem 1rem",
    },
  },

  video: {
    height: "25rem",
    borderRadius: "1rem",
    marginBottom: "5rem",

    [sizes.down("lg")]: {
      width: "80%",
      height: "25rem",
      margin: "1.75rem auto",
    },

    "& iframe": {
      display: "block",
      overflow: "hidden",
      border: 0,
    },
  },

  heading: {
    marginBottom: "2rem",

    "& span": {
      color: "#6236FF",
    },

    [sizes.down("lg")]: {
      textAlign: "center",
    },
  },

  alert: {
    fontSize: "1.7rem",
    padding: "2rem",
    borderRadius: "1rem",
    color: "rgb(249, 52, 94)",
    backgroundColor: "rgb(249, 52, 94,.15)",
    marginBottom: "2.5rem",
  },

  symptomsMain: {},

  symptomsDiv: {
    marginTop: "2rem",
    marginBottom: "3rem",
  },

  symptomsHeading: {
    marginTop: "1.5rem",
    fontSize: "1.7rem",
    textTransform: "capitalize",
  },

  sympList: {
    padding: ".5rem 2rem",
    textTransform: "capitalize",
  },

  helpfulLinks: {
    padding: "1rem 2rem",
  },

  link: {
    transition: "all .3s",
    "&, &:visited": {
      textDecoration: "none",
    },

    "& span": {
      marginLeft: ".25rem",
    },

    "&:hover": {
      color: "#000",
      "& span": {
        marginLeft: ".5rem",
      },
    },
  },

  info: {},

  footer: {
    width: "100%",
  },
};
