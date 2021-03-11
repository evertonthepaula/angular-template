import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-confirm',
  templateUrl: './icon-confirm.component.html',
  styleUrls: ['./icon-confirm.component.scss']
})
export class IconConfirmComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
  @Input() bgcolor = '#0FF';
  @Input() outline: boolean = true;
}
