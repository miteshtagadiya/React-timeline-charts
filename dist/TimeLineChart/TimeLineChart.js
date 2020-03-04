"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactGoogleCharts = require("react-google-charts");

require("./TimeLineChart.sass");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var TimelineChart = function TimelineChart(props) {
  var height = props.isDefault ? props.data.length * 50 : props.data.length * 20;
  return React.createElement(_reactGoogleCharts.Chart, {
    className: props.isDefault ? "TimeLineChart-default" : "TimeLineChart",
    height: height,
    chartType: "Timeline",
    loader: props.loader,
    data: props.data,
    options: {
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
    },
    rootProps: { "data-testid": "1" }
  });
};
exports.default = TimelineChart;