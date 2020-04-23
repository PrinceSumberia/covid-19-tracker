import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";

import LinearGradient from "./LinearGradient.js";
// import "./App.css";

/**
 * Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
 * Looking topojson for other countries/world?
 * Visit: https://github.com/markmarkoh/datamaps
 */
const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

// will generate random heatmap data on every call
const getHeatMapData = () => {
  return [
    { id: "AP", state: "Andhra Pradesh", value: getRandomInt() },
    { id: "AR", state: "Arunachal Pradesh", value: getRandomInt() },
    { id: "AS", state: "Assam", value: getRandomInt() },
    { id: "BR", state: "Bihar", value: getRandomInt() },
    { id: "CT", state: "Chhattisgarh", value: getRandomInt() },
    { id: "GA", state: "Goa", value: 21 },
    { id: "GJ", state: "Gujarat", value: 22 },
    { id: "HR", state: "Haryana", value: getRandomInt() },
    { id: "JH", state: "Jharkhand", value: 26 },
    { id: "KA", state: "Karnataka", value: 27 },
    { id: "KL", state: "Kerala", value: getRandomInt() },
    { id: "MP", state: "Madhya Pradesh", value: getRandomInt() },
    { id: "MH", state: "Maharashtra", value: getRandomInt() },
    { id: "MN", state: "Manipur", value: getRandomInt() },
    { id: "ML", state: "Meghalaya", value: 59 },
    { id: "MZ", state: "Mizoram", value: getRandomInt() },
    { id: "NL", state: "Nagaland", value: 59 },
    { id: "OR", state: "Odisha", value: 59 },
    { id: "PB", state: "Punjab", value: getRandomInt() },
    { id: "RJ", state: "Rajasthan", value: getRandomInt() },
    { id: "SK", state: "Sikkim", value: getRandomInt() },
    { id: "TN", state: "Tamil Nadu", value: getRandomInt() },
    { id: "TG", state: "Telangana", value: getRandomInt() },
    { id: "TR", state: "Tripura", value: 14 },
    { id: "UT", state: "Uttarakhand", value: getRandomInt() },
    { id: "UP", state: "Uttar Pradesh", value: 15 },
    { id: "WB", state: "West Bengal", value: 17 },
    { id: "WB", state: "West Bengal", value: 17 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: getRandomInt() },
    { id: "CH", state: "Chandigarh", value: getRandomInt() },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 19 },
    { id: "DD", state: "Daman and Diu", value: 20 },
    { id: "DL", state: "Delhi", value: 59 },
    { id: "JK", state: "Jammu and Kashmir", value: 25 },
    { id: "LA", state: "Ladakh", value: getRandomInt() },
    { id: "LD", state: "Lakshadweep", value: getRandomInt() },
    { id: "PY", state: "Puducherry", value: getRandomInt() },
  ];
};
// const getHeatMapData = () => {
//   return [
//     { id: "AP", state: "Andhra Pradesh", value: getRandomInt() },
//     { id: "AR", state: "Arunachal Pradesh", value: getRandomInt() },
//     { id: "AS", state: "Assam", value: getRandomInt() },
//     { id: "BR", state: "Bihar", value: getRandomInt() },
//     { id: "CT", state: "Chhattisgarh", value: getRandomInt() },
//     { id: "GA", state: "Goa", value: 21 },
//     { id: "GJ", state: "Gujarat", value: 22 },
//     { id: "HR", state: "Haryana", value: getRandomInt() },
//     { id: "HP", state: "Himachal Pradesh", value: 24 },
//     { id: "JH", state: "Jharkhand", value: 26 },
//     { id: "KA", state: "Karnataka", value: 27 },
//     { id: "KL", state: "Kerala", value: getRandomInt() },
//     { id: "MP", state: "Madhya Pradesh", value: getRandomInt() },
//     { id: "MH", state: "Maharashtra", value: getRandomInt() },
//     { id: "MN", state: "Manipur", value: getRandomInt() },
//     { id: "ML", state: "Meghalaya", value: 59 },
//     { id: "MZ", state: "Mizoram", value: getRandomInt() },
//     { id: "NL", state: "Nagaland", value: 59 },
//     { id: "OR", state: "Odisha", value: 59 },
//     { id: "PB", state: "Punjab", value: getRandomInt() },
//     { id: "RJ", state: "Rajasthan", value: getRandomInt() },
//     { id: "SK", state: "Sikkim", value: getRandomInt() },
//     { id: "TN", state: "Tamil Nadu", value: getRandomInt() },
//     { id: "TG", state: "Telangana", value: getRandomInt() },
//     { id: "TR", state: "Tripura", value: 14 },
//     { id: "UT", state: "Uttarakhand", value: getRandomInt() },
//     { id: "UP", state: "Uttar Pradesh", value: 15 },
//     { id: "WB", state: "West Bengal", value: 17 },
//     { id: "WB", state: "West Bengal", value: 17 },
//     { id: "AN", state: "Andaman and Nicobar Islands", value: getRandomInt() },
//     { id: "CH", state: "Chandigarh", value: getRandomInt() },
//     { id: "DN", state: "Dadra and Nagar Haveli", value: 19 },
//     { id: "DD", state: "Daman and Diu", value: 20 },
//     { id: "DL", state: "Delhi", value: 59 },
//     { id: "JK", state: "Jammu and Kashmir", value: 25 },
//     { id: "LA", state: "Ladakh", value: getRandomInt() },
//     { id: "LD", state: "Lakshadweep", value: getRandomInt() },
//     { id: "PY", state: "Puducherry", value: getRandomInt() },
//   ];
// };

function Map(props) {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());
  const completeData = props.completeData;

  const formatData = (completeData) => {
    console.log(completeData);
    const newArr = completeData.slice(-1).map((data) => data.regional);
    const formatedData = newArr.flat().map((region, i) => {
      return {
        state: region.loc,
        value: region.totalConfirmed,
      };
    });
    console.log(formatedData);
  };

  formatData(completeData);

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };

  return (
    <div className="full-width-height container">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const current = data.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <LinearGradient data={gradientData} />
    </div>
  );
}

export default Map;
