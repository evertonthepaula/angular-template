import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MultilineChartData, MultilineChartOptions } from '../charts-multiple.models';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChart implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('chart', { static: false }) chartCanvas;

  @Input() dataset: MultilineChartData;
  @Input() options: MultilineChartOptions;
  @Input() showlegends: boolean = true;
  @Input() customlegends: boolean = false;

  viewInitialized = false;
  chart: Chart;

  constructor() { }

  ngOnInit() { }

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
      type: 'line',
      data: this.dataset,
      options: {
        legend: {
          display: this.showlegends,
          position: 'bottom'
        }, elements: {
          point: {
            radius: this.options ? (this.options.hidePoints ? 0
              : this.options.customPointRadius ? this.options.customPointRadius : 3) : 3
          }
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem: any, data: any) => this.options.tooltipResolver
              ? this.options.tooltipResolver(tooltipItem, data)
              : `${data.datasets[tooltipItem.datasetIndex].label}: ${tooltipItem.yLabel}`
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              callback: (value, index, values) => this.options.yTicksResolver
                ? this.options.yTicksResolver(value, index, values) : value
            }
          }]
        }
      }
    });
  }
}
