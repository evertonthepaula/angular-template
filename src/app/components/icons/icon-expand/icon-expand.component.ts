import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-expand',
  templateUrl: './icon-expand.component.html',
})
export class IconExpandComponent {

  @Input() size = '40px';
  @Input() color = 'var(--theme-blue)';
}
