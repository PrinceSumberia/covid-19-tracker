import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default class Barchart extends Component {
  render() {
    const { data, isLoading, dataKey, stroke } = this.props;
    const result = data.map((dataItem) => {
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
