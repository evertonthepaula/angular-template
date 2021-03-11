export class MultilineChartData {
  datasets: Array<ChartDataset>;
  labels: Array<Date>;
}

export class ChartDataset {
  label: 'string';
  data: Array<number>;
  backgroundColor: string;
  borderColor: string;
  type: string;
}

export class MultilineChartOptions {
  legendValue?: boolean;
  legendFontSize?: number;
  customPointRadius?: number;
  hidePoints?: boolean;
  legendPosition?: 'left' | 'right';
  tooltipResolver?: (tooltipItem: any, data: any) => string;
  yTicksResolver?: (value, index, values) => string | number;
}
