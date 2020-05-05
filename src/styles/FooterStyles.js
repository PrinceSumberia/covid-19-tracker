export default {
  footer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "3rem",
    padding: "4rem",
  },
  btn: {
    padding: "1.5rem 4rem",
    fontFamily: "inherit",
    border: "none",
    fontSize: "1.7rem",
    borderRadius: "2rem",
    color: "white",
    transition: "all .3s",
    transform: "translateY(-.5rem)",
    boxShadow: "0 .5rem 2rem rgba(0,0,0,.5)",

    "&:hover": {
      transform: "translateY(0)",
      boxShadow: "0 .25rem 1rem rgba(0,0,0,.25)",
    },
  },

  github: {
    backgroundColor: "black",
  },

  twitter: {
    backgroundColor: "#00acee",
  },

  issue: {
    backgroundColor: "#817C9B",
  },
};
