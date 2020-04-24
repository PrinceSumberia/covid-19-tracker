import React, { Component } from "react";
import { LineChart, Line } from "recharts";
// import "./Charts.css";

export default class TinyCharts extends Component {
  render() {
    const { data, isLoading, dataKey, stroke } = this.props;
    const updatedData = data.slice(25, -1);
    const result = updatedData.map((dataItem) => {
      return {
        date: dataItem.day.slice(5),
        ...dataItem.summary,
        confirmed: dataItem.summary.total,
        active:
          dataItem.summary.total -
          (dataItem.summary.discharged + dataItem.summary.deaths),
      };
    });
    return (
      <div className="charts">
        {!isLoading && (
          <LineChart width={200} height={100} data={result}>
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={stroke}
              strokeWidth={2}
            />
          </LineChart>
        )}
      </div>
    );
  }
}
