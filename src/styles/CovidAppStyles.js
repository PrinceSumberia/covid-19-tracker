import colors from "../constants/colors";
import sizes from "./sizes";

export default {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    fontWeight: "500",
    color: (props) =>
      props.isDarkMode ? "rgb(245, 245, 245)" : colors.darkPurple,
    display: "inline-block",
    "& span": {
      fontWeight: "900",
      color: colors.purple,
      marginRight: "1rem",
    },

    [sizes.down("md")]: {
      fontSize: "2.8rem",
      padding: "3rem",
    },

    [sizes.down("xs")]: {
      fontSize: "2rem",
      padding: "3rem",
      // paddingBottom: "1.5rem",
    },
  },

  content: {
    backgroundColor: (props) => (props.isDarkMode ? colors.darkPurple : "#fff"),
    borderRadius: "2rem",
    marginTop: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [sizes.down("md")]: {
      marginTop: "2.5rem",
      padding: "1.5rem",
    },
  },

  contentArea: {
    display: "flex",
  },

  mapArea: {
    flex: "1",
  },

  chartArea: {
    minWidth: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

  tableContainer: {
    padding: "2rem",
    margin: "5rem 0",

    [sizes.down("md")]: {
      margin: "3.5rem 0",
      padding: "1.5rem",
    },

    [sizes.down("sm")]: {
      margin: "1.2rem 0",
      padding: "1rem",
    },
  },

  tableHeading: {
    textAlign: "center",
    marginTop: "2.5rem",
    fontSize: "3rem",

    [sizes.down("lg")]: {
      fontSize: "2.5rem",
      marginTop: "1.5rem",
    },

    [sizes.down("md")]: {
      marginTop: ".5rem",
    },

    [sizes.down("sm")]: {
      marginTop: ".2rem",
      fontSize: "1.3rem",
    },
  },

  chartRes: {
    // margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  tinyChartArea: {
    display: "flex",
    flexWrap: "wrap",
    padding: "2rem 2rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "5rem",
  },

  tinyChart: {
    margin: "2.5rem",
    "& h3": {
      textTransform: "capitalize",
      fontWeight: 500,

      textAlign: "center",
    },
  },

  tinych: {
    borderRadius: ".5rem",
    marginBottom: ".5rem",
    padding: "1rem",
  },

  refreshIcon: {
    fontSize: "10rem",
    animationName: "$rotation",
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",

    [sizes.down("md")]: {
      fontSize: "3rem",
    },
  },

  loadingIcon: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "@keyframes rotation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(359deg)",
    },
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    backgroundColor: colors.purple,
    padding: "1.5rem 3rem",
    color: "#fff",
    borderRadius: "10rem",
    fontFamily: "inherit",
    fontSize: "1.6rem",
    marginLeft: "2rem",
    transition: "all .4s",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.2)",
    position: "relative",

    [sizes.down("md")]: {
      fontSize: "1.5rem",
      borderRadius: "100px",
      marginLeft: 0,
      padding: "1rem",
    },

    [sizes.down("xs")]: {
      fontSize: "1rem",
    },

    "&:hover": {
      backgroundColor: colors.darkPurple,
      boxShadow: "0 .25rem .5rem rgba(0,0,0,.2)",
      outline: "none",
      border: "none",

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
