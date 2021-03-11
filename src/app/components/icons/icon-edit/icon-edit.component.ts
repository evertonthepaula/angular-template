import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss']
})
export class IconaEditComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
  @Input() bgColor = '#0FF';
  @Input() outline: boolean = true;
}
