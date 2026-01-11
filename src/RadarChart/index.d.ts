import { RadarChartProps } from 'gifted-charts-core';
interface ExtendedRadarChartProps extends RadarChartProps {
    hideDataPoints?: boolean;
    dataPointsColor?: string;
    dataPointsRadius?: number;
    renderDataPoint?: (data: any, index: number, x: number, y: number) => React.ReactElement;
    onPress?: (item: any, index: number) => void;
}
export declare const RadarChart: (props: ExtendedRadarChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
