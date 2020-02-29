## React-timeline-charts

React-timeline-charts is a styled wrapper over React Google Charts timelines-chart.

## Docs

[React-timeline-charts](https://miteshtagadiya.github.io/React-timeline-charts/)

## Example

```jsx
<TimeLineChart
  isDefault={true}
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
  colors={[
    "#A7A0B3",
    "#483A61",
    "#FFD567",
    "#FFE6A7",
    "#88E3CA",
    "#DAF4ED",
    "#DAF4ED",
    "#F0E3F4"
  ]}
/>
```

## Props

```markdown
isDefault=true or false (if true set to default react-google-charts style)
loader=loader message
data=[]
colors=[](colors)
```
