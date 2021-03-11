import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-load',
  templateUrl: './icon-load.component.html',
  styleUrls: ['./icon-load.component.scss']
})
export class IconLoadComponent {
  @Input() size = '24px';
  @Input() color = '#116fb9';
  @Input() type: string;
}
