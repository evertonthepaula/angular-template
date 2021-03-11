import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-dashboard',
  templateUrl: './icon-dashboard.component.html',
  styleUrls: ['./icon-dashboard.component.scss']
})
export class IconDashboardComponent {
  @Input() size = '33.626px';
  @Input() color = '#333';
  @Input('style') styledProps = '';
  @Input('class') classProps = '';
}
