import colors from "../constants/colors";

export default {
  root: {
    textAlign: "center",
  },
  panels: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnBox: {
    position: "absolute",
    top: "-.5%",
    left: "27%",
    marginLeft: "2rem",
    // transform: "translate(-50%, 0)",
  },
  button: {
    top: "0",
    left: "0",
    border: "none",
    backgroundColor: colors.purple,
    padding: "1.5rem 3rem",
    color: "#fff",
    borderRadius: "10rem",
    fontFamily: "inherit",
    fontSize: "1.6rem",
    marginTop: "6rem",
    transition: "all .4s",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.2)",
    position: "relative",

    "&:hover": {
      backgroundColor: colors.darkPurple,
      boxShadow: "0 .25rem .5rem rgba(0,0,0,.2)",
      outline: "none",
      border: "none",
      // transform: "translateY(-.3rem)",

      "&::before": {
        transform: "scaleX(1.4) scaleY(1.6)",
        opacity: 0,
      },
    },

    "&:focus": {
      border: "none",
      outline: "none",
    },

    "&:hover svg": {
      animationName: "$rotation",
      animationDuration: "1s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      display: "inline-block",
      backgroundColor: colors.purple,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      borderRadius: "10rem",
      transition: "all .4s",
      zIndex: -1,
    },
  },
};
