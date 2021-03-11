export class ChartCategoryDataSet {
  constructor(
    public data: ChartCategoryDataSetItem[],
    public label?: string
  ) {}

  get total(): number {
    return this.data ? this.data.reduce((acc, item) => acc += item.value, 0) : 0;
  }
}

export class ChartCategoryDataSetItem {
  label!: string;
  color!: string;
  value!: number;
}

export class DoughnutChartOptions {
  legendValue?: boolean;
  legendFontSize?: number;
  legendPosition?: 'left' | 'right';
}
