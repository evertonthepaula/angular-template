import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-info-solid',
  templateUrl: './icon-info-solid.component.html',
})
export class IconInfoSolidComponent {

  @Input() size = '24px';
  @Input() color = 'var(--theme-grey)';
}
