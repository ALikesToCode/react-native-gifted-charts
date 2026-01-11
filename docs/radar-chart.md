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
| `showGlow` | Boolean | Enable a glowing effect around the chart | `false` |
| `glowColor` | String | Color of the glow | `'rgba(255, 255, 255, 0.2)'` |
| `focusEnabled` | Boolean | Enable focus state on press | `false` |
| `highlightColor` | String | Color of the highlighted data point | `'orange'` |
| `highlightRadius` | Number | Radius of the highlighted data point | `6` |
| `showPopup` | Boolean | Show a popup view when a point is focused | `false` |
| `popupView` | Function | Custom component to render as popup `(item, index) => ReactElement` | `undefined` |

## Advanced Customization

### Interactivity & Popup

Enable focus and show a custom popup when a data point is clicked.

```jsx
<RadarChart
  data={data}
  focusEnabled
  showPopup
  popupView={(item, index) => (
    <View style={{backgroundColor: 'black', padding: 5, borderRadius: 4}}>
      <Text style={{color: 'white'}}>{item.value}</Text>
    </View>
  )}
  onPress={(item) => console.log(item)}
/>
```

### Visual Effects

Add a premium generic glow.

```jsx
<RadarChart
  data={data}
  showGlow
  glowColor="cyan"
/>
```
