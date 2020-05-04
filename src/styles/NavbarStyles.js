import colors from "../constants/colors";
import sizes from "./sizes";

export default {
  nav: {
    marginTop: "12rem",
    [sizes.down("md")]: {
      marginTop: "2.5rem",
      width: "100%",
    },
  },
  navItems: {
    listStyle: "none",
    [sizes.down("md")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
  navItem: {
    marginBottom: "5rem",
    fontWeight: "500",
    position: "relative",

    [sizes.down("md")]: {
      display: "inline-block",
      marginBottom: "2.5rem",
    },
  },
  navLinks: {
    textDecoration: "none",
    color: "inherit",
  },
  iconBox: {
    display: "flex",
    zIndex: "50",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: ".1rem .5rem",

    "& p": {
      zIndex: "50",
    },
  },
  icons: {
    fontSize: "2.5rem",
    zIndex: "50",
    padding: "1rem 0",

    [sizes.down("md")]: {
      display: "none",
    },
  },

  active: {
    "& div": {
      color: (props) =>
        props.isDarkMode ? "rgb(245, 245, 245)" : colors.purple,
      zIndex: "10",
      position: "relative",
      animation: "$float 2s ease infinite",
      transition: "all .5s",

      [sizes.down("lg")]: {
        animation: "none",
      },

      "&::before": {
        content: '""',
        position: "absolute",
        width: "155%",
        height: "110%",
        display: "block",
        borderRadius: "25px",
        transform: "translateX(2rem) skewX(10deg)",
        backgroundColor: (props) =>
          props.isDarkMode ? colors.lightPurple : "rgb(245, 245, 245)",
        zIndex: 10,

        [sizes.down("lg")]: {
          width: "120%",
          padding: ".5rem 2.5rem",
          height: "100%",
          transform: "translateX(0) skewX(0)",
        },

        [sizes.down("md")]: {
          borderRadius: "10px",
          width: "100%",
          padding: ".5rem 1.5rem",
        },
      },

      "&::after": {
        content: '""',
        position: "absolute",
        width: "130%",
        height: "110%",
        display: "block",
        top: 0,
        left: 0,
        backgroundColor: (props) =>
          props.isDarkMode ? "rgba(255,255,255,.6)nop" : colors.lightPurple,
        transform: "translate(-1rem, .1rem) skew(10deg, -5deg)",
        borderRadius: "25px",

        [sizes.down("lg")]: {
          content: "none",
        },
      },
    },
  },

  "@keyframes float": {
    "0%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translateY(0px)",
    },
    "50%": {
      boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
      transform: "translateY(-5px)",
    },
    "100%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translateY(0px)",
    },
  },
};
