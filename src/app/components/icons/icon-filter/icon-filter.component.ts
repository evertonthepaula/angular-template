import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-filter',
  templateUrl: './icon-filter.component.html',
  styleUrls: ['./icon-filter.component.scss']
})
export class IconFilterComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
  @Input() bgColor = '#0FF';
  @Input() outline: boolean = true;
}
