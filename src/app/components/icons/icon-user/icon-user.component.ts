import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.scss']
})
export class IconUserComponent {
  @Input() size = '33.626px';
  @Input() color = '#333';
}
