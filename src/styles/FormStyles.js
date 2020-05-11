import sizes from "./sizes";

export default {
  form: {
    // [sizes.down("xs")]: {
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
  },

  input: {
    fontFamily: "inherit",
    fontSize: "1.6rem",
    border: "none",
    padding: "1.5rem 3rem",
    width: "20%",
    borderRadius: "2.5rem",
    margin: "1.5rem",
    transition: "all .4s",

    [sizes.down("md")]: {
      width: "35%",
      fontSize: "1.4rem",
      padding: "1rem 2rem",
    },

    [sizes.down("xs")]: {},

    "&:focus": {
      width: "22%",
      outline: "none",

      [sizes.down("md")]: {
        width: "45%",
      },
    },

    "&::placeholder": {
      color: "#bbb",
    },
  },

  btn: {
    "&, &:active": {
      fontFamily: "inherit",
      fontSize: "1.4rem",
      padding: "1.5rem 2rem",
      backgroundColor: "#1A1053",
      color: "#fff",
      borderRadius: "2.5rem",
      border: "none",
      outline: "none",
      transition: "all .4s",
      transform: "translateY(-2px)",
      boxShadow: "0 .5rem 1rem rgba(0,0,0,0.2)",

      [sizes.down("md")]: {
        fontSize: "1.4rem",
        padding: "1rem 1.5rem",
      },
    },

    "&:hover": {
      backgroundColor: "#000",
      cursor: "pointer",
      transform: "translateY(0)",
      outline: "none",
    },
  },
};
