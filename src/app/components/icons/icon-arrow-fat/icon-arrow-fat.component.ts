import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-arrow-fat',
  templateUrl: './icon-arrow-fat.component.html',
  styleUrls: ['./icon-arrow-fat.component.scss']
})
export class IconFatArrowComponent {
  @Input() size = '33.626px';
  @Input() color = '#333';
  @Input() direction: string;
}
