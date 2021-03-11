import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() type: string = '';
  @Input() color = '#676767';
  @Input() bgColor = 'transparent';
  @Input() graphColor = 'transparent';
  @Input() graphValue = 0;
  @Input() style: string = '';

  styledVars: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizeCustomProperties();
  }

  ngOnChanges() {
    this.sanitizeCustomProperties();
  }

  private sanitizeCustomProperties() {
    this.styledVars = this.sanitizer.bypassSecurityTrustStyle(`
    --card-color:${this.color};
    --bg-color:${this.bgColor};
    --graph-color:${this.graphColor};
    --graph-value:${this.graphValue}%;
    ${this.style}
    `);
  }

}
