import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-paper',
  templateUrl: './icon-paper.component.html',
  styleUrls: ['./icon-paper.component.scss']
})
export class IconPaperComponent {
  @Input() size = '22px';
  @Input() color = '#F0F';
  @Input() bgColor = '#0FF';
  @Input() outline: boolean = true;
}
