import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-logout',
  templateUrl: './icon-logout.component.html',
  styleUrls: ['./icon-logout.component.scss']
})
export class IconLogoutComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
  @Input() bgColor = '#0FF';
  @Input() outline: boolean = true;
  @Input() direction: string;
}
