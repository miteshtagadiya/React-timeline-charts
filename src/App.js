import React from "react";
import TimeLineChart from "./TimeLineChart/TimeLineChart";
import "./App.css";

function App() {
  let data = [
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
  ];
  let colors = [
    "#A7A0B3",
    "#483A61",
    "#FFD567",
    "#FFE6A7",
    "#88E3CA",
    "#DAF4ED",
    "#DAF4ED",
    "#F0E3F4"
  ];
  return (
    <div className="App">
      <div className="container">
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <TimeLineChart
            isDefault={true}
            loader={<div>Loading Chart</div>}
            colors={colors}
            data={data}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <TimeLineChart
            isDefault={false}
            loader={<div>Loading Chart</div>}
            colors={colors}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
