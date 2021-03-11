import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-add',
  templateUrl: './icon-add.component.html',
  styleUrls: ['./icon-add.component.scss']
})
export class IconaAddComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
  @Input() bgColor = '#0FF';
  @Input() outline: boolean = true;
}
