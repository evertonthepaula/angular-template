import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-info',
  templateUrl: './icon-info.component.html',
})
export class IconInfoComponent {
  @Input() size = '24px';
  @Input() color = '#333';
}
