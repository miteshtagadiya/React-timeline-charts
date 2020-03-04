"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TimeLineChart = require("./TimeLineChart/TimeLineChart");

var _TimeLineChart2 = _interopRequireDefault(_TimeLineChart);

var _reactCodeBlocks = require("react-code-blocks");

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  var data = [[{
    type: "string",
    id: "President"
  }, { type: "string", id: "Name" }, { type: "date", id: "Start" }, { type: "date", id: "End" }], ["Campaign", "Facebook", new Date(1789, 3, 30), new Date(1797, 2, 4)], ["Campaign", "Google", new Date(1794, 2, 4), new Date(1801, 2, 4)], ["Campaign", "Mailchimp", new Date(1801, 2, 4), new Date(1809, 2, 4)], ["Campaign", "Google1", new Date(1791, 2, 4), new Date(1802, 2, 4)], ["Campaign", "Mailchimp1", new Date(1801, 2, 4), new Date(1809, 2, 4)]];
  var colors = ["#A7A0B3", "#483A61", "#FFD567", "#FFE6A7", "#88E3CA", "#DAF4ED", "#DAF4ED", "#F0E3F4"];
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "container", style: { background: "#F0F8FF" } },
      _react2.default.createElement(
        "div",
        {
          style: {
            padding: 25,
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            borderBottom: "2px solid black"
          }
        },
        _react2.default.createElement(
          "label",
          null,
          "React Timeline Charts"
        )
      ),
      _react2.default.createElement(
        "div",
        {
          style: {
            padding: 25,
            fontSize: 18
          }
        },
        _react2.default.createElement(
          "label",
          null,
          "Styled wrapper over React Google Charts timelines-chart."
        )
      ),
      _react2.default.createElement(
        "div",
        {
          style: {
            padding: "0px 25px",
            fontSize: 20,
            fontWeight: "bold"
          }
        },
        _react2.default.createElement(
          "label",
          null,
          "Default Chart"
        )
      ),
      _react2.default.createElement(
        "div",
        { style: { padding: 20 } },
        _react2.default.createElement(_reactCodeBlocks.CopyBlock, {
          text: "<TimeLineChart\n  isDefault={true}\n  loader={<div>Loading Chart</div>}\n  colors={[\"#A7A0B3\",\"#483A61\",\"#FFD567\",\"#FFE6A7\",\"#88E3CA\",\"#DAF4ED\",\"#DAF4ED\",\"#F0E3F4\"]}\n  data={[\n      {type: \"string\",id: \"President\"},{ type: \"string\", id: \"Name\" },{ type: \"date\", id: \"Start\" },{ type: \"date\", id: \"End\" }],\n      [\"Campaign\", \"Facebook\", new Date(1789, 3, 30), new Date(1797, 2, 4)],\n      [\"Campaign\", \"Google\", new Date(1794, 2, 4), new Date(1801, 2, 4)],\n      [\"Campaign\", \"Mailchimp\", new Date(1801, 2, 4), new Date(1809, 2, 4)],\n      [\"Campaign\", \"Google1\", new Date(1791, 2, 4), new Date(1802, 2, 4)],\n      [\"Campaign\", \"Mailchimp1\", new Date(1801, 2, 4), new Date(1809, 2, 4)]\n]}\n/>",
          language: "jsx",
          showLineNumbers: true,
          theme: _reactCodeBlocks.dracula,
          wrapLines: true,
          codeBlock: true
        })
      ),
      _react2.default.createElement(
        "div",
        {
          style: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center"
          }
        },
        _react2.default.createElement(_TimeLineChart2.default, {
          isDefault: true,
          loader: _react2.default.createElement(
            "div",
            null,
            "Loading Chart"
          ),
          colors: colors,
          data: data
        })
      ),
      _react2.default.createElement(
        "div",
        {
          style: {
            padding: "0px 25px",
            fontSize: 20,
            fontWeight: "bold"
          }
        },
        _react2.default.createElement(
          "label",
          null,
          "Custom Chart"
        )
      ),
      _react2.default.createElement(
        "div",
        { style: { padding: 20 } },
        _react2.default.createElement(_reactCodeBlocks.CopyBlock, {
          text: "<TimeLineChart\n  isDefault={false}\n  loader={<div>Loading Chart</div>}\n  colors={[\"#A7A0B3\",\"#483A61\",\"#FFD567\",\"#FFE6A7\",\"#88E3CA\",\"#DAF4ED\",\"#DAF4ED\",\"#F0E3F4\"]}\n  data={[\n      {type: \"string\",id: \"President\"},{ type: \"string\", id: \"Name\" },{ type: \"date\", id: \"Start\" },{ type: \"date\", id: \"End\" }],\n      [\"Campaign\", \"Facebook\", new Date(1789, 3, 30), new Date(1797, 2, 4)],\n      [\"Campaign\", \"Google\", new Date(1794, 2, 4), new Date(1801, 2, 4)],\n      [\"Campaign\", \"Mailchimp\", new Date(1801, 2, 4), new Date(1809, 2, 4)],\n      [\"Campaign\", \"Google1\", new Date(1791, 2, 4), new Date(1802, 2, 4)],\n      [\"Campaign\", \"Mailchimp1\", new Date(1801, 2, 4), new Date(1809, 2, 4)]\n]}\n/>",
          language: "jsx",
          showLineNumbers: true,
          theme: _reactCodeBlocks.dracula,
          wrapLines: true,
          codeBlock: true
        })
      ),
      _react2.default.createElement(
        "div",
        {
          style: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 50,
            borderBottom: "2px solid black"
          }
        },
        _react2.default.createElement(_TimeLineChart2.default, {
          isDefault: false,
          loader: _react2.default.createElement(
            "div",
            null,
            "Loading Chart"
          ),
          colors: colors,
          data: data
        })
      ),
      _react2.default.createElement(
        "div",
        {
          style: {
            padding: 25,
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center"
          }
        },
        _react2.default.createElement(
          "label",
          null,
          "React Timeline Charts is maintained by",
          " ",
          _react2.default.createElement(
            "a",
            { href: "https://miteshtagadiya.js.org/", target: "_blank" },
            "miteshtagadiya"
          )
        )
      )
    )
  );
}

exports.default = App;