export default {
  displayFlex: {
    display: "flex",
  },

  boxStyle: {
    width: "180px",
    margin: "auto",
  },

  gradientStyle: {
    backgroundImage: (props) => `linear-gradient(to right, ${props.data.fromColor} , ${props.data.toColor})`,
    height: "20px",
  },

  fill: {
    flex: 1,
  },

  center: {
    textAlign: "center",
  },

  mt16: {
    marginTop: "16px",
  },
}