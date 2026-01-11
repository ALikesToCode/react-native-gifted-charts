# Radar Chart

## Usage

```jsx
import { RadarChart } from 'react-native-gifted-charts';

const data = [
  { value: 50, label: 'A' },
  { value: 80, label: 'B' },
  { value: 90, label: 'C' },
  { value: 70, label: 'D' },
];

<RadarChart data={data} />
```

## Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `data` | Array | Array of objects containing `value` and optional `label` | `[]` |
| `dataSet` | Array | Array of arrays for multiple datasets | `undefined` |
| `maxValue` | Number | Maximum value for the chart scaling | Calculated from data |
| `chartSize` | Number | Overall size of the chart | `300` |
| `hideDataPoints` | Boolean | Whether to hide dots at data vertices | `false` |
| `dataPointsColor` | String | Color of the data points | `'black'` |
| `dataPointsRadius` | Number | Radius of the data points | `4` |
| `renderDataPoint` | Function | Custom function to render data points `(data, index, x, y) => ReactElement` | `undefined` |
| `onPress` | Function | Callback when a data point is pressed `(item, index) => void` | `undefined` |
| `stroke` | String | Color of the chart stroke | `'black'` |
| `fill` | String | Color of the chart fill | `'none'` |
| `showGradient` | Boolean | Enable gradient fill | `false` |
| `gradientColor` | String | Color for the gradient | `undefined` |

## Advanced Customization

### Custom Data Points

You can render custom elements like icons or complex shapes at each vertex using `renderDataPoint`.

```jsx
<RadarChart
  data={data}
  renderDataPoint={(item, index, x, y) => (
    <View key={index} style={{position: 'absolute', top: y - 10, left: x - 10}}>
      <MyCustomIcon />
    </View>
  )}
/>
```

### Interactivity

Capture press events on specific data points.

```jsx
<RadarChart
  data={data}
  onPress={(item, index) => console.log('Parsed item:', item)}
/>
```
