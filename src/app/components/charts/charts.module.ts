import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS DECLARATIONS
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChart } from './line-chart/line-chart.component';
import { PieChart } from './pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PieChart,
    LineChart,
    DoughnutChartComponent,
  ],
  exports: [
    PieChart,
    LineChart,
    DoughnutChartComponent,
  ]
})
export class ChartsModule { }
