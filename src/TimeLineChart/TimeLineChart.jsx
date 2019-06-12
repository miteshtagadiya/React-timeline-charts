import * as React from "react";
import { Chart } from "react-google-charts";
import "./TimeLineChart.sass";

const TimelineChart = props => {
  return (
    <Chart
      className={!props.className ? "TimeLineChart" : "TimeLineChart-width"}
      height={props.height ? props.height : "auto"}
      chartType="Timeline"
      loader={<div>Loading Chart</div>}
      data={[
        [
          {
            type: "string",
            id: "President"
          },
          { type: "string", id: "Name" },

          { type: "date", id: "Start" },
          { type: "date", id: "End" }
        ],
        ["Campaign", "Facebook", new Date(1789, 3, 30), new Date(1797, 2, 4)],
        ["Campaign", "Google", new Date(1794, 2, 4), new Date(1801, 2, 4)],
        ["Campaign", "Mailchimp", new Date(1801, 2, 4), new Date(1809, 2, 4)],
        ["Campaign", "Google1", new Date(1791, 2, 4), new Date(1802, 2, 4)],
        ["Campaign", "Mailchimp1", new Date(1801, 2, 4), new Date(1809, 2, 4)]
      ]}
      options={{
        allowHtml: true,
        tooltip: { isHtml: true },
        colors: [
          "#A7A0B3",
          "#483A61",
          "#FFD567",
          "#FFE6A7",
          "#88E3CA",
          "#DAF4ED",
          "#DAF4ED",
          "#F0E3F4"
        ],
        barWidth: 10,
        legend: { position: "none" },

        enableInteractivity: true,
        showRowNumber: false,
        showBarLabels: false,
        timeline: {
          groupByRowLabel: false,
          showBarLabels: false,
          showRowLabels: false
          //      colorByRowLabel: true,
          // singleColor: "#A7A0B3",
          //    showBarLabels: false,
          //  colorByRowLabel: true
        },

        backgroundColor: "white"
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};
export default TimelineChart;
