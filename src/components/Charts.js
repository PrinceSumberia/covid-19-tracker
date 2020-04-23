import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import colors from "../colors";
import "./Charts.css";

export default class Charts extends Component {
  render() {
    const { data, isLoading } = this.props;
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
          <LineChart width={700} height={500} data={result}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="confirmed"
              stroke={colors.red}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="active"
              stroke={colors.orange}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="discharged"
              stroke={colors.green}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="deaths"
              stroke={colors.purple}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        )}
      </div>
    );
  }
}
