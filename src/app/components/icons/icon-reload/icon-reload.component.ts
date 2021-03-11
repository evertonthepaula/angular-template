import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-reload',
  templateUrl: './icon-reload.component.html',
  styleUrls: ['./icon-reload.component.scss']
})
export class IconReloadComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
}
