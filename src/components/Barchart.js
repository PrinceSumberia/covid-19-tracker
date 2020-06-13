import React, { Component } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

export default class Barchart extends Component {
  render() {
    const { data, isLoading, dataKey, stroke } = this.props;
    let result;
    try {
      const updatedData = data.slice(1).slice(-50);
      result = updatedData.map((dataItem) => {
        let newObject = {};
        for (let [key, value] of Object.entries(dataItem)) {
          if (key === "date") {
            newObject[key] = value;
          } else {
            newObject[key] = Number(value);
          }
        }
        return {
          ...newObject,
          totalactive:
            newObject.totalconfirmed -
            (newObject.totalrecovered + newObject.totaldeceased),
        };
      });
    } catch (err) { }

    return (
      <div className="barcharts">
        {!isLoading && (
          <BarChart
            width={350}
            height={150}
            data={result}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey={dataKey} fill={stroke} />
          </BarChart>
        )}
      </div>
    );
  }
}
