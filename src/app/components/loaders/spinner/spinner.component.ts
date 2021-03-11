import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class LoaderSpinnerComponent implements OnInit, OnChanges {
  @Input() color = '#f5f5f5';
  @Input() bgColor = 'transparent';
  @Input() style: string;
  @Input() title: string = 'carregando...';

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
    --spinner-color:${this.color};
    --spinner-bg-color:${this.bgColor};
    ${this.style}
    `);
  }

}
