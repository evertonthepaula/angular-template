import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
})
export class IconSearchComponent {
  @Input() size = '24px';
  @Input() color = '#747474';
}
