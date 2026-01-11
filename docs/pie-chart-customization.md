# Pie Chart Customization

## Rounded Corners (Donut)

For Donut charts (`donut` prop set to true), you can now enable rounded corners for the segments.

### Props

| Prop | Type | Description |
|---|---|---|
| `roundedCorners` | boolean | If true, renders donut segments with rounded ends. Requires `donut` and `innerRadius` to be set. |

### Usage

```jsx
<PieChart
  data={data}
  donut
  innerRadius={40}
  radius={80}
  roundedCorners={true} // New!
/>
```

## Gradients

You can also use gradients for slices by setting `showGradient` and `gradientCenterColor`.
