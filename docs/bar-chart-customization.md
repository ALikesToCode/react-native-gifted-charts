# Bar Chart Customization

## Granular Corner Radii

You can now specify corner radii for individual corners of the bars. This allows for more flexible designs, such as rounding only the top corners or creating unique shapes.

### Props

| Prop | Type | Description |
|---|---|---|
| `barBorderRadius` | number | Sets the radius for all four corners. |
| `barBorderTopLeftRadius` | number | Sets the radius for the top-left corner. |
| `barBorderTopRightRadius` | number | Sets the radius for the top-right corner. |
| `barBorderBottomLeftRadius` | number | Sets the radius for the bottom-left corner. |
| `barBorderBottomRightRadius` | number | Sets the radius for the bottom-right corner. |

### Usage

**Global Setting (applies to all bars):**

```jsx
<BarChart
  data={data}
  barBorderTopLeftRadius={10}
  barBorderTopRightRadius={10}
/>
```

**Individual Bar Setting:**

```jsx
const data = [
  {
    value: 50,
    barBorderTopLeftRadius: 20,
    barBorderBottomRightRadius: 20,
  },
  { value: 80 },
];

<BarChart data={data} />
```

## Pattern Backgrounds

You can apply SVG patterns to the bar background.

### Props

| Prop | Type | Description |
|---|---|---|
| `barBackgroundPattern` | Function | Function returning an SVG `<Pattern>` element. |
| `patternId` | String | The ID of the pattern to use. |

### Usage

```jsx
import { Pattern } from 'react-native-svg';

const MyPattern = () => (
  <Pattern
    id="Stripe"
    patternUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="10"
    height="10"
    rotation="45"
  >
    <Rect x="0" y="0" width="2" height="10" fill="gray" />
  </Pattern>
);

<BarChart
  data={data}
  barBackgroundPattern={MyPattern}
  patternId="Stripe"
/>
```
