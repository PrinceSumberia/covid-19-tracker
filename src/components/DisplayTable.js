import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/DisplayTable.css";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const DisplayTable = ({ tableData, isDarkMode }) => {
  let result;
  // active: "2510";
  // confirmed: "3738";
  // deaths: "61";
  // deltaconfirmed: "0";
  // deltadeaths: "0";
  // deltarecovered: "0";
  // lastupdatedtime: "01/05/2020 21:22:46";
  // recovered: "1167";
  // state: "Delhi";
  // statecode: "DL";
  // statenotes: "";
  try {
    result = tableData.map((dataItem) => {
      let newObject = {};
      for (let [key, value] of Object.entries(dataItem)) {
        if (
          key === "lastupdatedtime" ||
          key === "state" ||
          key === "statecode" ||
          key === "statenotes"
        ) {
          newObject[key] = value;
        } else {
          newObject[key] = Number(value);
        }
      }

      return newObject;
    });
  } catch (err) {}

  const { items, requestSort, sortConfig } = useSortableData(result);
  const [displayDist, setDisplayDist] = useState(false);
  const [distId, setDistId] = useState("");

  const lightText = {
    color: isDarkMode && "rgba(255,255,255,.75)",
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const toggleDistView = (id) => {
    setDistId(id);
    setDisplayDist(!displayDist);
  };

  return (
    <table>
      {/* <caption>Products</caption> */}
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("state")}
              className={getClassNamesFor("state")}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("confirmed")}
              className={getClassNamesFor("confirmed")}
            >
              Confirmed
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("active")}
              className={getClassNamesFor("active")}
            >
              Active
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("recovered")}
              className={getClassNamesFor("recovered")}
            >
              Recovered
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("deaths")}
              className={getClassNamesFor("deaths")}
            >
              Deceased
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.statecode}>
            <td style={lightText}>
              <FontAwesomeIcon
                icon={
                  distId === item.statecode && displayDist
                    ? faArrowCircleDown
                    : faArrowCircleRight
                }
                className=""
                onClick={() => toggleDistView(item.statecode)}
              />{" "}
              {item.state}
            </td>

            <td style={lightText}>{item.confirmed}</td>
            <td style={lightText}>{item.active}</td>
            <td style={lightText}>{item.recovered}</td>
            <td style={lightText}>{item.deaths}</td>
          </tr>
          /* {distId === item.id && displayDist ? (
              <tr>
                <td style={lightText}>{item.name}</td>
                <td style={lightText}>{item.confirmed}</td>
                <td style={lightText}>{item.active}</td>
                <td style={lightText}>{item.discharged}</td>
                <td style={lightText}>{item.deaths}</td>
              </tr>
            ) : null} */
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTable;
