import sizes from "./sizes";

export default {
  footer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "3rem",
    padding: "4rem",

    [sizes.down("md")]: {
      marginTop: "2rem",
      padding: "2rem",
    },

    [sizes.down("sm")]: {
      marginTop: "1rem",
      padding: "1.5rem",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  btn: {
    padding: "1.5rem 4rem",
    fontFamily: "inherit",
    border: "none",
    fontSize: "1.7rem",
    borderRadius: "1.5rem",
    color: "white",
    transition: "all .3s",
    transform: "translateY(-.3rem)",
    boxShadow: "0 1rem 3rem rgba(0,0,0,.24)",
    textDecoration: "none",

    [sizes.down("md")]: {
      boxShadow: "none",
      padding: "1rem 2.5rem",
      fontSize: "1.6rem",
    },

    [sizes.down("sm")]: {
      marginBottom: "1rem",
      textAlign: "center",
      boxShadow: "0",
      fontSize: "1.3rem",
      padding: ".5rem 2.5rem",
      transform: "translateY(0)",
      borderRadius: "5px",
      width: "15rem",
    },

    "&:hover": {
      transform: "translateY(0)",
      boxShadow: "0 .25rem 1rem rgba(0,0,0,.25)",

      [sizes.down("sm")]: {
        boxShadow: "none",
      },
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
