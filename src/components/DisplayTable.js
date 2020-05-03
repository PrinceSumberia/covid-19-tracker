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

const DisplayTable = ({ tableData, isDarkMode, districtLevel }) => {
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

  //   districtData: Array(14)
  // 0: {district: "Other State", notes: "Case tranferred from Nagaland", active: 0, confirmed: 1, deceased: 0, …}
  // 1: {district: "Bongaigaon", notes: "", active: 5, confirmed: 5, deceased: 0, …}
  // 2: {district: "Cachar", notes: "", active: 0, confirmed: 1, deceased: 0, …}
  // 3: {district: "Dhubri", notes: "", active: 1, confirmed: 5, deceased: 0, …}
  // 4: {district: "Goalpara", notes: "", active: 1, confirmed: 5, deceased: 0, …}
  // 5: {district: "Golaghat", notes: "", active: 0, confirmed: 9, deceased: 0, …}
  // 6: {district: "Hailakandi", notes: "", active: 0, confirmed: 1, deceased: 1, …}
  // 7: {district: "Kamrup", notes: "", active: 0, confirmed: 1, deceased: 0, …}
  // 8: {district: "Kamrup Metropolitan", notes: "", active: 0, confirmed: 1, deceased: 0, …}
  // 9: {district: "Karimganj", notes: "", active: 2, confirmed: 2, deceased: 0, …}
  // 10: {district: "Lakhimpur", notes: "", active: 0, confirmed: 1, deceased: 0, …}
  // 11: {district: "Morigaon", notes: "", active: 0, confirmed: 6, deceased: 0, …}
  // 12: {district: "Nalbari", notes: "", active: 0, confirmed: 4, deceased: 0, …}
  // 13: {district: "South Salmara Mankachar", notes: "", active: 0, confirmed: 1, deceased: 0, …}
  // length: 14
  // __proto__: Array(0)
  // state: "Assam"
  // statecode: "AS"

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
    const stateWithDist = districtLevel.find(
      (state) => state.statecode === statecode
    );
    const districtData = stateWithDist.districtData.map((dist) => (
      <tr className="district-tr">
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
        <tr className="district-tr">
          <th className="tableHead districtHead">District</th>
          <th className="tableHead districtHead">Confirmed</th>
          <th className="tableHead districtHead">Active</th>
          <th className="tableHead districtHead">Recovered</th>
          <th className="tableHead districtHead">Deceased</th>
        </tr>
        {districtData}
        <tr class="spacer-bottom"></tr>
      </>
    );
    return markup;
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
          marginBottom: "2rem",
        }}
      >
        Exapnd to get district wise data
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
          <>
            <tr key={item.statecode} className="state-tr">
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
              </td>
              <td className="state-td" style={lightText}>
                {item.active}
              </td>
              <td className="state-td" style={lightText}>
                {item.recovered}
              </td>
              <td className="state-td" style={lightText}>
                {item.deaths}
              </td>
            </tr>
            {distId === item.statecode && displayDist
              ? getDistrictData(item.statecode)
              : null}
          </>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTable;
