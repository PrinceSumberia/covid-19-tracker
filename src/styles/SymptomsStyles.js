export default {
  symptoms: {
    padding: ".2rem 1rem",
  },

  content: {
    padding: "1rem",
    display: "flex",
  },

  mainContent: {
    padding: "4rem",
    flex: "0 0 1",
    border: "1px solid #ccc",
    borderRadius: "1rem",
    marginRight: "2rem",
  },

  sidebar: {
    padding: ".5rem 1rem",
    flex: "0 0 30%",
  },

  video: {
    height: "25rem",
    borderRadius: "1rem",
    marginBottom: "4rem",
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
    transition: "all .2s",
    "&, &:visited": {
      textDecoration: "none",
    },

    "&:hover": {
      color: "#000",
      marginRight: "2rem",
    },
  },

  info: {},
};
