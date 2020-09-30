import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleRight,
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

const DisplayTable = ({ tableData, isDarkMode, districtLevel }) => {
  let result;
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

  const getDistrictData = (statecode) => {
    try {
      const stateWithDist = districtLevel.find(
        (state) => state.statecode === statecode
      );
      const districtData = stateWithDist.districtData.map((dist) => (
        <tr className="district-tr" key={dist.district}>
          <td className="district-td" style={lightText}>
            {dist.district}
          </td>
          <td className="district-td" style={lightText}>
            {dist.confirmed}
            {dist.delta.confirmed > 0 && (
              <span className="delta-confirmed">[{dist.delta.confirmed}] </span>
            )}
          </td>
          <td className="district-td" style={lightText}>
            {dist.active}
          </td>
          <td className="district-td" style={lightText}>
            {dist.recovered}
            {dist.delta.recovered > 0 && (
              <span className="delta-recovered">[{dist.delta.recovered}] </span>
            )}
          </td>
          <td className="district-td" style={lightText}>
            {dist.deceased}
            {dist.delta.deceased > 0 && (
              <span className="delta-deceased">[{dist.delta.deceased}] </span>
            )}
          </td>
        </tr>
      ));
      const markup = (
        <>
          <tr className="district-tr" key={`${statecode} Dist`}>
            <th className="tableHead districtHead">District</th>
            <th className="tableHead districtHead">Confirmed</th>
            <th className="tableHead districtHead">Active</th>
            <th className="tableHead districtHead">Recovered</th>
            <th className="tableHead districtHead">Deceased</th>
          </tr>
          {districtData}
          <tr className="spacer-bottom"></tr>
        </>
      );
      return markup;
    } catch (err) {}
  };

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
      <caption
        style={{
          marginTop: "1rem",
          marginBottom: "4rem",
        }}
      >
        Expand to get district wise data
      </caption>
      <thead>
        <tr>
          <th className="tableHead">
            <button
              type="button"
              onClick={() => requestSort("state")}
              className={`tableHead-Button ${getClassNamesFor("state")}`}
            >
              Name
            </button>
          </th>
          <th className="tableHead">
            <button
              type="button"
              onClick={() => requestSort("confirmed")}
              className={`tableHead-Button ${getClassNamesFor("confirmed")}`}
            >
              Confirmed
            </button>
          </th>
          <th className="tableHead">
            <button
              type="button"
              onClick={() => requestSort("active")}
              className={`tableHead-Button ${getClassNamesFor("active")}`}
            >
              Active
            </button>
          </th>
          <th className="tableHead">
            <button
              type="button"
              onClick={() => requestSort("recovered")}
              className={`tableHead-Button ${getClassNamesFor("recovered")}`}
            >
              Recovered
            </button>
          </th>
          <th className="tableHead">
            <button
              type="button"
              onClick={() => requestSort("deaths")}
              className={`tableHead-Button ${getClassNamesFor("deaths")}`}
            >
              Deceased
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <React.Fragment key={item.statecode}>
            <tr className="state-tr">
              <td className="state-td" style={lightText}>
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

              <td className="state-td" style={lightText}>
                {item.confirmed}
                {item.deltaconfirmed > 0 && (
                  <span className="delta-confirmed">
                    [{item.deltaconfirmed}]{" "}
                  </span>
                )}
              </td>
              <td className="state-td" style={lightText}>
                {item.active}
              </td>
              <td className="state-td" style={lightText}>
                {item.recovered}
                {item.deltarecovered > 0 && (
                  <span className="delta-recovered">
                    [{item.deltarecovered}]{" "}
                  </span>
                )}
              </td>
              <td className="state-td" style={lightText}>
                {item.deaths}
                {item.deltadeaths > 0 && (
                  <span className="delta-deceased">[{item.deltadeaths}] </span>
                )}
              </td>
            </tr>
            {distId === item.statecode && displayDist
              ? getDistrictData(item.statecode)
              : null}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTable;
