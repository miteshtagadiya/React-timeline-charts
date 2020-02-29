import * as React from "react";
import { Chart } from "react-google-charts";
import "./TimeLineChart.sass";

const TimelineChart = props => {
  let height = props.isDefault
    ? props.data.length * 50
    : props.data.length * 20;
  return (
    <Chart
      className={props.isDefault ? "TimeLineChart-default" : "TimeLineChart"}
      height={height}
      chartType="Timeline"
      loader={props.loader}
      data={props.data}
      options={{
        allowHtml: true,
        tooltip: { isHtml: true },
        colors: props.colors,
        barWidth: 10,
        legend: { position: "none" },
        enableInteractivity: true,
        showRowNumber: false,
        showBarLabels: false,
        timeline: {
          groupByRowLabel: false,
          showBarLabels: false,
          showRowLabels: false
        },

        backgroundColor: "white"
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};
export default TimelineChart;
