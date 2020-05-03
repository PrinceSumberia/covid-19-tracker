import colors from "../constants/colors";

export default {
  header: {
    display: "flex",
    alignItems: "center",
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
  },

  content: {
    backgroundColor: (props) => (props.isDarkMode ? colors.darkPurple : "#fff"),
    borderRadius: "2rem",
    marginTop: "3rem",
    display: "flex",
    padding: "4rem",
    flexDirection: "column",
    justifyContent: "center",
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
  },

  tableHeading: {
    textAlign: "center",
    marginTop: "2.5rem",
    fontSize: "3rem",
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
    // width: "50%",
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
