import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-eye',
  templateUrl: './icon-eye.component.html',
})
export class IconEyeComponent {

  @Input() size = '40px';
  @Input() color = 'var(--theme-blue)';
}
