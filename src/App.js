import React from "react";
import TimeLineChart from "./TimeLineChart/TimeLineChart";
import { CopyBlock, dracula } from "react-code-blocks";
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
    <div>
      <div className="container" style={{ background: "#F0F8FF" }}>
        <div
          style={{
            padding: 25,
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            borderBottom: "2px solid black"
          }}
        >
          <label>React Timeline Charts</label>
        </div>
        <div
          style={{
            padding: 25,
            fontSize: 18
          }}
        >
          <label>
            Styled wrapper over React Google Charts timelines-chart.
          </label>
        </div>
        <div
          style={{
            padding: "0px 25px",
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          <label>Default Chart</label>
        </div>
        <div style={{ padding: 20 }}>
          <CopyBlock
            text={`<TimeLineChart
  isDefault={true}
  loader={<div>Loading Chart</div>}
  colors={["#A7A0B3","#483A61","#FFD567","#FFE6A7","#88E3CA","#DAF4ED","#DAF4ED","#F0E3F4"]}
  data={[
      {type: "string",id: "President"},{ type: "string", id: "Name" },{ type: "date", id: "Start" },{ type: "date", id: "End" }],
      ["Campaign", "Facebook", new Date(1789, 3, 30), new Date(1797, 2, 4)],
      ["Campaign", "Google", new Date(1794, 2, 4), new Date(1801, 2, 4)],
      ["Campaign", "Mailchimp", new Date(1801, 2, 4), new Date(1809, 2, 4)],
      ["Campaign", "Google1", new Date(1791, 2, 4), new Date(1802, 2, 4)],
      ["Campaign", "Mailchimp1", new Date(1801, 2, 4), new Date(1809, 2, 4)]
]}
/>`}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
            wrapLines
            codeBlock
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
            isDefault={true}
            loader={<div>Loading Chart</div>}
            colors={colors}
            data={data}
          />
        </div>
        <div
          style={{
            padding: "0px 25px",
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          <label>Custom Chart</label>
        </div>
        <div style={{ padding: 20 }}>
          <CopyBlock
            text={`<TimeLineChart
  isDefault={false}
  loader={<div>Loading Chart</div>}
  colors={["#A7A0B3","#483A61","#FFD567","#FFE6A7","#88E3CA","#DAF4ED","#DAF4ED","#F0E3F4"]}
  data={[
      {type: "string",id: "President"},{ type: "string", id: "Name" },{ type: "date", id: "Start" },{ type: "date", id: "End" }],
      ["Campaign", "Facebook", new Date(1789, 3, 30), new Date(1797, 2, 4)],
      ["Campaign", "Google", new Date(1794, 2, 4), new Date(1801, 2, 4)],
      ["Campaign", "Mailchimp", new Date(1801, 2, 4), new Date(1809, 2, 4)],
      ["Campaign", "Google1", new Date(1791, 2, 4), new Date(1802, 2, 4)],
      ["Campaign", "Mailchimp1", new Date(1801, 2, 4), new Date(1809, 2, 4)]
]}
/>`}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
            wrapLines
            codeBlock
          />
        </div>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 50,
            borderBottom: "2px solid black"
          }}
        >
          <TimeLineChart
            isDefault={false}
            loader={<div>Loading Chart</div>}
            colors={colors}
            data={data}
          />
        </div>
        <div
          style={{
            padding: 25,
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          <label>
            React Timeline Charts is maintained by{" "}
            <a href="https://miteshtagadiya.js.org/" target="_blank">
              miteshtagadiya
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
