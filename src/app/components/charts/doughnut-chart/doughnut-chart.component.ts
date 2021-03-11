import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartCategoryDataSet, DoughnutChartOptions } from '../charts.models';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('chart', { static: false }) chartCanvas;

  @Input() dataset: ChartCategoryDataSet;
  @Input() options: DoughnutChartOptions;
  @Input() customlegends: boolean = false;

  viewInitialized = false;
  chart: Chart;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.buildChart();
    }, 10);
  }

  buildChart() {
    if (!this.dataset) { return; }
    if (this.chart) { this.chart.destroy(); }

    const ctx = this.chartCanvas.nativeElement.getContext('2d');

    this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: this.dataset.data.map(x => x.label),
            datasets: [{
                label: '',
                data: this.dataset.data.map(x => x.value),
                backgroundColor : this.dataset.data.map(x => x.color),
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 85,
            legend: {
              display: false,
            }
        }
    });
  }
}
