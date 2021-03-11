import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-cancel',
  templateUrl: './icon-cancel.component.html',
  styleUrls: ['./icon-cancel.component.scss']
})
export class IconCancelComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
  @Input() bgColor = '#0FF';
  @Input() outline: boolean = true;
}
