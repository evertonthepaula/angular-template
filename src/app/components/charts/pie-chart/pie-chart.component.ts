import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartCategoryDataSet, DoughnutChartOptions } from '../charts.models';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChart implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('chart', { static: false }) chartCanvas;

  @Input() dataset: ChartCategoryDataSet;
  @Input() options: DoughnutChartOptions;
  @Input() showtotal: boolean = false;
  @Input() showlegends: boolean = true;
  @Input() customlegends: boolean = false;

  private viewInitialized = false;
  private chart: Chart;

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
      type: 'pie',
      data: {
        labels: this.dataset.data.map(x => x.label),
        datasets: [{
          data: this.dataset.data.map(x => x.value),
          backgroundColor: this.dataset.data.map(x => x.color),
          borderWidth: 0
        }]
      },
      options: {
        legend: {
          display: this.showlegends,
          position: 'bottom'
        }
      }
    });
  }
}
