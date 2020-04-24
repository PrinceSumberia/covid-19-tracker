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
import colors from "../constants/colors";
import "../styles/Charts.css";

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
          <LineChart
            width={600}
            height={300}
            data={result}
            dots={false}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend
              wrapperStyle={{
                margin: "-3rem 1rem",
              }}
            />
            <Line
              type="monotone"
              dataKey="confirmed"
              stroke={colors.red}
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="active" stroke={colors.orange} />
            <Line type="monotone" dataKey="discharged" stroke={colors.green} />
            <Line type="monotone" dataKey="deaths" stroke={colors.purple} />
          </LineChart>
        )}
      </div>
    );
  }
}
