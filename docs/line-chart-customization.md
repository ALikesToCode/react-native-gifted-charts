# Line Chart Customization

## Glow Effect

You can add a "Glow" effect to the lines to make them stand out, creating a neon-like appearance.

### Props

| Prop | Type | Description |
|---|---|---|
| `showGlow` | boolean | Enables the glow effect around the line. |
| `glowColor` | string | The color of the glow (defaults to 'rgba(255, 255, 255, 0.2)'). |

### Usage

**Global Setting:**

```jsx
<LineChart
  data={data}
  showGlow
  glowColor="rgba(255, 99, 71, 0.4)"
  color="tomato"
/>
```

**Per Data Set (Multi-line):**

```jsx
const dataSet = [
  {
    data: data1,
    color: 'cyan',
    showGlow: true,
    glowColor: 'cyan'
  },
  {
    data: data2,
    color: 'orange' // no glow
  }
];

<LineChart dataSet={dataSet} />
```
