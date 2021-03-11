import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.scss']
})
export class IconDeleteComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
  @Input() bgcolor = '#0FF';
  @Input() outline: boolean = true;
}
