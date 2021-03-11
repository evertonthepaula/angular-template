import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-arrow',
  templateUrl: './icon-arrow.component.html',
  styleUrls: ['./icon-arrow.component.scss']
})
export class IconArrowComponent {
  @Input() size = '33.626px';
  @Input() color = '#333';
  @Input() direction: string;
}
