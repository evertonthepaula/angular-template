import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-minimize',
  templateUrl: './icon-minimize.component.html',
})
export class IconMinimizeComponent {

  @Input() size = '40px';
  @Input() color = 'var(--theme-blue)';
}
